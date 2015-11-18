import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/jqm-component';

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['role:data-role', 'theme:data-theme', 'corners:data-corners', 'shadow:data-shadow'],
  classNameBindings: ['allCorners:ui-corner-all', 'overlayShadow:ui-overlay-shadow'],
  isShown: true,
  showStatus: Ember.on('didInsertElement',
    Ember.observer('isShown', function () {
        if (this.get('isShown')) {
          $(this.$()).show();
        } else {
          $(this.$()).hide();
        }
      }
    )),
  didInsertElement() {
    $(this.$()).enhanceWithin();
  }
});
