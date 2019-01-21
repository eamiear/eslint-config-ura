// These rules relate to code running in Node.js, or in browsers with CommonJS
module.exports = {
  rules: {
    // enforce return after callback
    'callback-return': 'off',

    // enforce require() on the top-level module scope
    'global-require': 'off',

    // require error handling in callbacks
    'handle-callback-err': 'off',

    // disallow use of the Buffer() constructor
    'no-buffer-constructor': 'off',

    // disallow require calls to be mixed with regular variable declarations
    // disallow: var fs = require('fs'), baz = 42;
    'no-mixed-requires': 'off',

    // disallow new operators with calls to require
    // disallow: var appHeader = new require('app-header');
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // disallow: var fullPath = __dirname + "/foo.js";
    'no-path-concat': 'error',

    // disallow the use of process.env
    'no-process-env': 'off',

    // disallow the use of process.exit()
    'no-process-exit': 'off',

    // disallow specified modules when loaded by require
    'no-restricted-modules': 'off',

    // disallow synchronous methods
    'no-sync': 'off'
  }
}
