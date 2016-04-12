import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/jqm-checkbox';

export default Ember.Checkbox.extend({
  layout: layout,
  attributeBindings: ['clearBtn:data-clear-btn', 'mini:data-mini', 'autofocus',
    'name', 'required', 'autocomplete'],
  didInsertElement() {
    $(this.$()).checkboxradio();
  }
});
