import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Choose the active theme: 'soft', 'solarized' or 'nord'.
const ACTIVE = 'soft' as 'soft' | 'solarized' | 'nord'

// Soft: a GitHub-style dark palette with dimmed text (about 10:1 instead of 17:1)
// to cut the halo ("blooming") bright white text makes on near-black, and an
// off-white light mode with no pure white.
const SOFT = makeColors({
  label: 'Soft',
  roles: { accent: '#4493f8', danger: '#f85149', success: '#3fb950', warning: '#d29922', pro: '#a371f7' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e8ecf0',
        'surface-1': '#eef1f4',
        'surface-2': '#f3f5f7',
        'surface-3': '#f3f5f7',
        'text-primary': '#1f2328',
        'text-secondary': '#424a53',
        'text-muted': '#59636e',
      },
    },
    roles: { accent: '#0969da', danger: '#cf222e', success: '#1a7f37', warning: '#9a6700', pro: '#8250df' },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0d1117',
        'surface-1': '#12171e',
        'surface-2': '#151b22',
        'surface-3': '#171d25',
        'text-primary': '#bcc4cc',
        'text-secondary': '#9aa2ab',
        'text-muted': '#848d97',
      },
    },
  },
  codeTheme: { light: 'github-light', dark: 'github-dark' },
})

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

const { theme, problems } = { soft: SOFT, solarized: SOLARIZED, nord: NORD }[ACTIVE]
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
