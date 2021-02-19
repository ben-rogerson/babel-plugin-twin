# Babel plugin twin

This plugin activates [twin.macro](https://github.com/ben-rogerson/twin.macro)’s tw prop without you adding the twin import:

```diff
- import "twin.macro"

const Component = () => <div tw="block">
```

## Installation

```shell
npm i -D babel-plugin twin
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

## Special thanks

A big shoutout goes to [@euvs](https://github.com/euvs) for the plugin concept + code and [@mxsbr](https://github.com/mxstbr) for planting [the idea](https://github.com/ben-rogerson/twin.macro/issues/247).
