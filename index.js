/* jshint node: true */
'use strict';

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var path = require('path');

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
  },
  treeForPublic: function(tree) {

    var trees = [];

    if (tree) {
      trees.push(tree);
    }

    trees.push(new Funnel(path.join(this.app.bowerDirectory, 'jquery-mobile-bower/css/images'), {
      srcDir: '/',
      destDir: 'assets/images'
    }));

    return mergeTrees(trees);
  }
};
