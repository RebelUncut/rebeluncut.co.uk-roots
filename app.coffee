js_pipeline     = require 'js-pipeline'
css_pipeline    = require 'css-pipeline'
sass            = require 'node-sass'
dynamic_content = require 'dynamic-content'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.js'),
    css_pipeline(files: 'assets/css/*.scss'),
    dynamic_content()
  ]

  scss:
    sourcemap: true

  jade:
    pretty: true

   server:
    clean_urls: false
