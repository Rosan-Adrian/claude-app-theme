# app-theme

A whole-app color theme for the Claude desktop app. It recolors the entire interface, not just code blocks: backgrounds, panels, text, accents and syntax highlighting, in both light and dark mode.

Three themes are included:

- **Soft** (active by default): a GitHub-style dark palette with dimmed text, about 10:1 contrast instead of 17:1, to reduce the halo or "blooming" that bright white text on near-black causes for people with astigmatism or light sensitivity. Its light mode uses soft off-white surfaces with no pure white.
- **Solarized**: cream paper by day, deep teal by night, with Solarized code highlighting.
- **Nord**: Snow Storm by day, Polar Night by night, with Nord code highlighting.

To switch, change `ACTIVE` at the top of `hooks/register.ts` to `'soft'`, `'solarized'` or `'nord'`.

By default the conversation text uses the app's code font (Settings > Code font), for a terminal-like look. Set `TERMINAL_FONT` to `false` in `hooks/register.ts` to keep the app's own font.

## Install

At the prompt of a terminal session:

```
/plugin install app-theme --marketplace Rosan-Adrian/claude-app-theme
```

Answer `y` to add the marketplace, then pick a scope (user scope is first; press Enter).

From a shell:

```
claude plugin install app-theme --marketplace Rosan-Adrian/claude-app-theme
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `Rosan-Adrian/claude-app-theme`, then Add plugin.

The theme draws in the Claude desktop and mobile apps; terminals and editors keep their own colors.

## License

MIT
