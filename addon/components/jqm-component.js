import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/jqm-component';

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['role:data-role', 'theme:data-theme'],
  didInsertElement() {
    $(this.$()).enhanceWithin();
  }
});
