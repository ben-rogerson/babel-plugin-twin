# Babel plugin twin

<a href="https://www.npmjs.com/package/babel-plugin-twin"><img src="https://img.shields.io/npm/dt/babel-plugin-twin.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/babel-plugin-twin"><img src="https://img.shields.io/npm/v/babel-plugin-twin.svg" alt="Latest Release"></a>
<a href="https://discord.gg/Xj6x9z7"><img src="https://img.shields.io/discord/705884695400939552?label=discord&logo=discord" alt="Discord"></a>

This plugin automatically adds the tw prop from [twin.macro](https://github.com/ben-rogerson/twin.macro) - no import required:

```diff
- import "twin.macro"

const Component = () => <div tw="block" />
```

You’ll also get the css prop from your css-in-js library:

```diff
const Component = () => <div css={`background-color: blue;`} />
```

## Installation

```shell
npm i -D babel-plugin-twin
# or
yarn add babel-plugin-twin -D
```

Then add the plugin to your babel config:

```js
module.exports = {
  plugins: [
    "babel-plugin-twin",
    "babel-plugin-macros",
    // ...
  ],
};
```

Note: You must add `"babel-plugin-twin"` before `"babel-plugin-macros"` in the plugins array.

## Options

Add debug to your config to see some feedback:

```js
module.exports = {
  plugins: [
    ["babel-plugin-twin", { debug: true }],
    "babel-plugin-macros",
    // ...
  ],
};
```

To avoid checking files or folders, supply `exclude` with an array of regex patterns:

```js
module.exports = {
  plugins: [
    ["babel-plugin-twin", {
      "exclude": [
        "temp/",
        "..."
      ]
    },
    "babel-plugin-macros",
    // ...
  ],
};
```

## Special thanks

A big shoutout goes to [@euvs](https://github.com/euvs) for the plugin concept + code and [@mxsbr](https://github.com/mxstbr) for planting [the idea](https://github.com/ben-rogerson/twin.macro/issues/247).
