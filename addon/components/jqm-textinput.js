import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/jqm-textinput';

export default Ember.TextField.extend({
  layout: layout,
  attributeBindings: ['clearBtn:data-clear-btn', 'mini:data-mini', 'autofocus',
    'name', 'required', 'autocomplete'],
  didInsertElement() {
    $(this.$()).textinput();
  }
});
