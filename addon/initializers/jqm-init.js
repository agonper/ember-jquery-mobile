import $ from 'jquery';

export function initialize() {
  // This reduces jQuery Mobile control to let ember work
  $.mobile.ajaxEnabled = false;
  $.mobile.pushStateEnabled = false;
  $.mobile.linkBindingEnabled = false;
  $.mobile.hashListeningEnabled = false;
  $.mobile.ignoreContentEnabled = true;
  $.mobile.autoInitializePage = false;
}

export default {
  name: 'jqm-init',
  initialize: initialize
};
