# prettier-plugin-pkgsort

[![NPM version](https://img.shields.io/npm/v/prettier-plugin-pkgsort?color=a1b858&label=)](https://www.npmjs.com/package/prettier-plugin-pkgsort)

Use prettier-package-json to sort your package.json.

## 💎 Features

- Consistent key order
- Sensibly sorted scripts
- Expand/contract author, contributors, and maintainers
- Filter and sort files field
- Powered by [prettier-package-json](https://github.com/cameronhunter/prettier-package-json)

## 📦 Installation

```bash
$ npm install prettier-plugin-pkgsort -D
$ yarn add prettier-plugin-pkgsort -D
$ pnpm add prettier-plugin-pkgsort -D
```

## 🚀 Usage

```ts
// .prettierrc.js
module.exports = {
	plugins: [
		// Add this plugin to your prettier config
		"prettier-plugin-pkgsort",
	],
};
```

## 🎶 Options

```ts
// .prettierrc.js
module.exports = {
	pkgsortExpandUsers: true, // Expand users in author, contributors, and maintainers
	pkgsortKeyOrder: [
		"name",
		"description",
		// ...
	], // Order of keys
};
```

## 📝 License

[MIT](./LICENSE). Made with ❤️ by [Ray](https://github.com/so1ve)
