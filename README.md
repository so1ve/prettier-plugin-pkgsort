# prettier-plugin-pkg

[![NPM version](https://img.shields.io/npm/v/prettier-plugin-pkg?color=a1b858&label=)](https://www.npmjs.com/package/prettier-plugin-pkg)

## 💎 Features

- Consistent key order
- Sensibly sorted scripts
- Expand/contract author, contributors, and maintainers
- Filter and sort files field
- Powered by [prettier-package-json](https://github.com/cameronhunter/prettier-package-json)

## 📦 Installation

```bash
$ npm install prettier-plugin-pkg -D
$ yarn add prettier-plugin-pkg -D
$ pnpm add prettier-plugin-pkg -D
```

## 🚀 Usage

```ts
// .prettierrc.js
module.exports = {
  plugins: [
    // Add this plugin to your prettier config
    "prettier-plugin-pkg",
  ],
};
```

## 🎶 Options

```ts
// .prettierrc.js
module.exports = {
  pkgExpandUsers: true, // Expand users in author, contributors, and maintainers
  pkgKeyOrder: [
    "name",
    "description",
    // ...
  ], // Order of keys
};
```

## 📝 License

[MIT](./LICENSE). Made with ❤️ by [Ray](https://github.com/so1ve)
