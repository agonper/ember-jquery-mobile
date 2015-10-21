/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  // jQuery JS
  app.import(app.bowerDirectory + "/jquery/dist/jquery.min.js");
  app.import('vendor/ember-jquery/shim.js', {
    type: 'vendor',
    exports: {'jquery': ['default']}
  }); // Thanks to John Otander (@4lpine)

  // jQuery Mobile
  app.import(app.bowerDirectory + "/jquery-mobile-datepicker-wrapper/external/jquery-ui/datepicker.js");
  app.import(app.bowerDirectory + "/jquery-mobile-bower/js/jquery.mobile-1.4.5.min.js");
  app.import(app.bowerDirectory + "/jquery-mobile-datepicker-wrapper/external/jquery-ui/datepicker.js");

  // jQuery Mobile CSS
  app.import(app.bowerDirectory + "/jquery-mobile-bower/css/jquery.mobile-1.4.5.min.css");
  app.import(app.bowerDirectory + "/jquery-mobile-datepicker-wrapper/jquery.mobile.datepicker.css");
  app.import(app.bowerDirectory + "/jquery-mobile-datepicker-wrapper/jquery.mobile.datepicker.theme.css");


  return app.toTree();
};
