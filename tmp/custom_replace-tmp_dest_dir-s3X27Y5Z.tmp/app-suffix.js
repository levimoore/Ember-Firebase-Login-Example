/* jshint ignore:start */

define('Ember-Firebase-Login-Example/config/environment', ['ember'], function(Ember) {
  var prefix = 'Ember-Firebase-Login-Example';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("Ember-Firebase-Login-Example/tests/test-helper");
} else {
  require("Ember-Firebase-Login-Example/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */
