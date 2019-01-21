# eslint-config-ura
> ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html), [configuring](https://eslint.org/docs/user-guide/configuring) for the ura Javascript Style Guide

## Installation
```base
npm install eslint eslint-config-ura --save-dev
```
## Usage
### eslint-config-ura
Once the `eslint-config-ura` package is installed, you can use it by specifying `ura` in the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).
```js
{
  "extends": "ura",
  "rules": {
    // Additional, per-project rules...
  }
}
```
Or you can specifying `eslint-config-ura` in the `eslintConfig` section of your `package.json`

```json
{
  "eslintConfig": {
    "extends": "eslint-config-ura"
  }
}
```
