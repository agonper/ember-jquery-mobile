module.exports = {
  description: 'ember-jquery-mobile initializer',

  normalizeEntityName: function(entityName) {
    return entityName;
  },

  afterInstall: function() {
    return Promise.all([
      this.addBowerPackageToProject('jquery-mobile-bower'),
      this.addBowerPackageToProject('arschmitz/jquery-mobile-datepicker-wrapper')
    ]);
  }
};
