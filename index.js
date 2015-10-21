/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-jquery-mobile',
  included: function(app) {
    this._super.included(app);

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


  }
};
