module.exports = {
  extends: [
    './rules/best-pratices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  // 定义你想支持的javascript语言配置选项
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  // 环境定义了预定义的全局变量
  env: {
    browser: true, // 启用浏览器环境
    node: true,  // 启用node环境
    es6: true // 启用除了module外的所有es6特性
  },
  // 对于未定义的变量，会被`no-undef`规则检测并警告。使用全局变量时，如果不想被`eslint`检测，可通过global进行配置。
  // global: {
  //   document: false, // 使用document全局变量，且document不能被覆写。设置为true时，表示可以被覆写
  //   navigator: false,
  //   window: false
  // },
  // 支持第三方插件，插件使用前需先安装
  // plugins: [],
  // "off" or 0 - 禁用规则
  // "warn" or 1 - 警告
  // "error" or 2 - 错误
  // rules: []
}
