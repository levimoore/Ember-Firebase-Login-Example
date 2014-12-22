module('JSHint - .');
test('router.js should pass jshint', function() { 
  ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
});
