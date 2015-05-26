'use strict';

var extend = require('extend-shallow');
var regex = require('todo-regex');

/**
 * Find todos and add them to the context
 * so they can be used in templates.
 */

module.exports = function(app) {
  var re = regex();

  return function (file, next) {
    var todos = app.cache.data.todos || {};
    var match, str = file.content;
    var res = [];

    while (match = re.exec(str)) {
      str = str.split(match[0]).join('');
      res.push(format(match[1] || match[2]));
    }

    var o = {};
    o[file.path] = res;
    app.data({todos: extend(todos, o)});
    next();
  };
};

function format(str) {
  return str.replace(/\s*-->\s*$/, '').trim();
}
