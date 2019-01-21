// These rules relate to variable declarations
module.exports = {
  rules: {
    // 变量声明时要求初始化或不允许初始化
    'init-declarations': 'off',
    /**
     * 不允许外部作用域的变量声明与隐藏于该作用域下的变量同名
     * var a = 3
     * function b() {
     *   var a = 10
     * }
     */
    'no-shadow': 'warn',
    /**
     * 不允许删除变量
     * var x
     * delete x
     */
    'no-delete-var': 'error',
    // disallow labels that share a name with a variable
    'no-label-var': 'error',
    /**
     * 不允许特殊全局变量或受限制的全局变量
     * 如IE浏览器的event全局变量
     */
    'no-restricted-globals': 'warn',
    /**
     * 不允许覆写受限制的名称
     * 如undefined = 'foo'
     */
    'no-shadow-restricted-names': 'error',
    // 不允许使用未声明/定义的的变量
    'no-undef': 'error',
    // 不允许初始化变量为undefined
    'no-undef-init': 'error',
    // 不允许使用undefined作为变量
    'no-undefined': 'error',
    // 不允许定义但没有使用的变量，参数除外
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    // 不允许变量、函数、类（变量提升）在定义前调用，这里允许函数提升。
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }]
  }
}
