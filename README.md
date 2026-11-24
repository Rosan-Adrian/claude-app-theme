# app-theme

A whole-app color theme for the Claude desktop app. It recolors the entire interface, not just code blocks: backgrounds, panels, text, accents and syntax highlighting, in both light and dark mode.

Two themes are included:

- **Solarized** (active by default): cream paper by day, deep teal by night, with Solarized code highlighting.
- **Nord**: Snow Storm by day, Polar Night by night, with Nord code highlighting.

To switch, change `ACTIVE` at the top of `hooks/register.ts` to `'solarized'` or `'nord'`.

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
