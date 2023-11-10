# pixijsTemplate

Provides a barebones pixi.js (with webpack) template with full autocomplete support.

## Usage

1. `npm install` Installs node_modules included in package.json.
2. `npm run watch` Triggers full webpack bundling and on-going change monitoring. All build artifacts will be placed in the generated `dist` folder.

## Recommendation

- Install the VSCode extension **Live Server** (by Ritwick Dey) and click on the `Go Live` button in the bottom right (will automatically refresh on saved changes).
- Double-check that webpack.config.cjs is correctly configured for the right environment (`development` / `production`). See comments in file.

## Optional

- Install the VSCode extension **Prettier Code Formatter** and configure VSCode to format on save and use Prettier instead of the default.

## Special Notes

- The project index.html is auto-generated in the `dist` folder as part of the webpack configuration, specifically `HtmlWebpackPlugin`.
- The `dist` folder is completely emptied every triggered build (i.e. bundling event).
