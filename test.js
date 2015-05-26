/*!
 * template-todos <https://github.com/jonschlinkert/template-todos>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
require('should');
var Template = require('template');
var todos = require('./');
var template;

describe('todos', function () {
  beforeEach(function() {
    template = new Template();
  });

  it('should match todos in `file.content`:', function (done) {
    template.onLoad(/./, todos(template));
    template.page('foo', {content: '// todo: foo bar baz'});
    var page = template.views.pages.foo;
    page.content.should.match(/todo: foo bar baz/);
    done();
  });

  it('should add a todos property to the global data object:', function (done) {
    template.onLoad(/./, todos(template));
    template.page('foo', {content: '// todo: foo bar baz'});
    template.cache.data.should.have.property('todos');
    done();
  });

  it('should add todos to the `todos` array:', function (done) {
    template.onLoad(/./, todos(template));
    template.page('foo', {content: '// todo: foo bar baz'});
    template.page('bar', {content: '/*\n * todo: a b c \n */\n// todo: x y z'});
    template.page('baz', {content: '<!-- todo: one two three -->'});
    template.cache.data.todos.should.eql({
      foo: [ 'foo bar baz' ],
      bar: [ 'a b c', 'x y z' ],
      baz: [ 'one two three' ]
    });
    template.cache.data.todos.foo[0].should.equal('foo bar baz');
    template.cache.data.todos.bar[0].should.equal('a b c');
    template.cache.data.todos.bar[1].should.equal('x y z');
    template.cache.data.todos.baz[0].should.equal('one two three');
    done();
  });
});
