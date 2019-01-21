module.exports = {
  rules: {
    // 箭头函数体中需要大括号。
    // as-needed，大括号可以省略时，强制不使用大括号
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // 在箭头函数参数周围需要括号
    'arrow-parens': ['error', 'as-needed'],

    // 在箭头函数的箭头之前/之后需要空格
    'arrow-spacing': 'error',

    // 验证构造函数中super()的调用
    'constructor-super': 'error',

    // 在generator函数中的*周围强制间隔
    'generator-star-spacing': ['error', { before: false, after: true }],

    // 不允许修改类声明的变量
    // class A { }; A = 0;
    'no-class-assign': 'error',

    // 禁止使用容易混淆的箭头函数
    // var x = a => 1 ? 2 : 3;
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // 禁止修改const定义的常量
    'no-const-assign': 'error',

    // 类成员不允许命名重复
    'no-dupe-class-members': 'error',

    // 不允许重复的import
    // import { merge } from 'module';
    // import { find } from 'module';
    'no-duplicate-imports': 'error',

    // 不允许 new Symbol()
    // 正常使用： Symbol()
    'no-new-symbol': 'error',

    // disallow specific imports
    'no-restricted-imports': 'off',

    // 构造函数中不允许在调用super()之前，使用this/super
    'no-this-before-super': 'error',

    // 不允许在对象中使用不必要的计算属性键
    // var a = { ['x']: 0 };
    'no-useless-computed-key': 'error',

    // 不允许不必要的构造函数
    'no-useless-constructor': 'error',

    // 不允许将import，export，解构值重命名为相同的名称
    // disallow: import { foo as foo } from "bar";
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // require let or const instead of var
    'no-var': 'error',

    // require object literal shorthand syntax
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'off',

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // prefer destructuring from arrays and objects
    'prefer-destructuring': 'off',

    // 不允许parseInt()支持二进制，十进制，十六进制字符串
    // disallow: parseInt("111110111", 2) === 503;
    'prefer-numeric-literals': 'error',

    // 建议使用 ...args 而不是 arguments
    // allow: function foo(...args) {console.log(args);}
    // disallow: function foo() {console.log(arguments);}
    'prefer-rest-params': 'error',

    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'warn',

    // 建议使用模板文本而不是字符串串联
    'prefer-template': 'warn',

    // disallow generator functions that do not have yield
    'require-yield': 'error',

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    'sort-imports': 'off',

    // require symbol description
    'symbol-description': 'error',

    // enforce usage of spacing in template strings
    // `${ x }`
    'template-curly-spacing': 'error',

    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'after']
  }
}
