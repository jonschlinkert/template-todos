# template-todos [![NPM version](https://badge.fury.io/js/template-todos.svg)](http://badge.fury.io/js/template-todos)

> Middleware for Template, for matching todos in a string.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i template-todos --save
```

## Usage

```js
var todos = require('template-todos');

// register as an `onLoad` middleware
template.onLoad(/./, todos(template));

// example pages with `todos` 
template.page('foo', {content: '// todo: foo bar baz'});
template.page('bar', {content: '/*\n * todo: a b c \n */\n// todo: x y z'});
template.page('baz', {content: '<!-- todo: one two three -->'});
```

Adds an array of todos for each template to the `todos` object on the context:

```js
var todos = template.cache.data.todos;
//=> results in:
// {
//   foo: [ 'foo bar baz' ],
//   bar: [ 'a b c', 'x y z' ],
//   baz: [ 'one two three' ]
// }
```

## Related projects

* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](http://assemble.io)
* [todo-regex](https://github.com/regexps/todo-regex): Regular expression for matching TODO statements in a string.
* [template-toc](https://github.com/jonschlinkert/template-toc): Middleware for generating a markdown Table of Contents with Template or applications based on Template.
* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)
* [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/template-todos/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 26, 2015._