import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/jqm-component';

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['role:data-role', 'theme:data-theme', 'corners:data-corners', 'shadow:data-shadow'],
  classNameBindings: ['allCorners:ui-corner-all', 'overlayShadow:ui-overlay-shadow'],
  didInsertElement() {
    $(this.$()).enhanceWithin();
  }
});
