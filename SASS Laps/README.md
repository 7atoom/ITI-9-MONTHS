# Medical Services Section (Sass 7-1)

A responsive medical services grid built with the Sass 7-1 architecture. Compile Sass to CSS with the included `sass` CLI.

## Structure
```
scss/
  abstracts/  // variables, mixins
  base/       // reset, typography, utilities
  components/ // services component
  layout/     // spacing/layout rules
  pages/      // page-level tweaks
  themes/     // theme overrides (placeholder)
  vendors/    // third-party styles (placeholder)
css/
  main.css    // compiled output
```

## Development
Install dependencies (if not already):

```bash
npm install sass
```

Compile once:

```bash
npx sass scss/main.scss css/main.css --style=expanded
```

Watch for changes:

```bash
npx sass --watch scss/main.scss css/main.css --style=expanded
```

Open `index.html` in your browser to view the section.

