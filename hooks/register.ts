import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Choose the active theme: 'solarized' or 'nord'.
const ACTIVE: 'solarized' | 'nord' = 'solarized'

const SOLARIZED = makeColors({
  label: 'Solarized',
  roles: { accent: '#268bd2', danger: '#dc322f', success: '#859900', warning: '#b58900', pro: '#6c71c4' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#eee8d5',
        'surface-1': '#f6f0dc',
        'surface-2': '#fdf6e3',
        'surface-3': '#fdf6e3',
        'text-primary': '#073642',
        'text-secondary': '#475b62',
        'text-muted': '#586e75',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#002b36',
        'surface-1': '#032f3b',
        'surface-2': '#05323e',
        'surface-3': '#063440',
        'text-primary': '#eee8d5',
        'text-secondary': '#b5bdb8',
        'text-muted': '#93a1a1',
      },
    },
  },
  codeTheme: { light: 'solarized-light', dark: 'solarized-dark' },
})

const NORD = makeColors({
  label: 'Nord',
  roles: { accent: '#88c0d0', danger: '#bf616a', success: '#a3be8c', warning: '#ebcb8b', pro: '#b48ead' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e5e9f0',
        'surface-1': '#eceff4',
        'surface-2': '#f4f6f9',
        'surface-3': '#f4f6f9',
        'text-primary': '#2e3440',
        'text-secondary': '#3b4252',
        'text-muted': '#4c566a',
      },
    },
    roles: { accent: '#5e81ac' },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#2e3440',
        'surface-1': '#323845',
        'surface-2': '#353c49',
        'surface-3': '#373e4b',
        'text-primary': '#eceff4',
        'text-secondary': '#d8dee9',
        'text-muted': '#aab3c3',
      },
    },
  },
  codeTheme: { dark: 'nord' },
})

const { theme, problems } = ACTIVE === 'solarized' ? SOLARIZED : NORD
const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
