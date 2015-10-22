var rsvp = require('rsvp/dist/rsvp.js');

module.exports = {
  description: 'ember-jquery-mobile initializer',

  normalizeEntityName: function(entityName) {
    return entityName;
  },

  afterInstall: function() {
    return rsvp.Promise.all([
      this.addBowerPackageToProject('jquery-mobile-bower'),
      this.addBowerPackageToProject('jquery-mobile-datepicker-wrapper', 'arschmitz/jquery-mobile-datepicker-wrapper')
    ]);
  }
};
