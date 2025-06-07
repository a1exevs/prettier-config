# @alexevs/prettier-config 🎨

Reusable Prettier configuration to keep your code style consistent across projects.

## 📦 Installation

```bash
npm install --save-dev prettier @alexevs/prettier-config
# or
yarn add -D prettier @alexevs/prettier-config
```

## ⚙️ Usage

Create a `prettier.config.cjs` in the root of your project and re-export this configuration. 
If your project relies on CommonJS, you can also name the file `prettier.config.js`:

```javascript
// prettier.config.cjs
module.exports = require('@alexevs/prettier-config');
```

You can extend the base options by spreading them:

```javascript
module.exports = {
  ...require('@alexevs/prettier-config'),
  printWidth: 80,
};
```

Add a formatting script to your `package.json` if you haven't already:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

## 👥 Who is this for?

Developers who maintain multiple JavaScript or TypeScript projects and want a single source of truth for Prettier settings.


## 📜 License

[MIT](./LICENSE)
