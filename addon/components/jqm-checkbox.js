import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/jqm-checkbox';

export default Ember.Checkbox.extend({
  layout: layout,
  attributeBindings: ['clearBtn:data-clear-btn', 'mini:data-mini', 'autofocus',
    'name', 'required', 'autocomplete', 'theme:data-theme', 'enhanced:data-enhanced'],
  didInsertElement() {
    var checkbox = $(this.$());
    var _this = this;
    this.set('elem', checkbox);

    checkbox.checkboxradio();
    checkbox.on('change', () => {
      _this.set('checked', checkbox.prop('checked'));
    });
  },

  checkChanged: Ember.on('didInsertElement', Ember.observer('checked', function () {
    var checkbox = this.get('elem');
    if (checkbox) {
      var checked = this.get('checked');
      checkbox.prop('checked', checked);
      checkbox.checkboxradio('refresh');
    }
  }))
});
