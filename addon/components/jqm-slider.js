import $ from 'jquery';
import Ember from 'ember';
import layout from '../templates/components/jqm-slider';

export default Ember.TextField.extend({
  layout: layout,
  attributeBindings: ['mini:data-mini', 'highlight:data-highlight', 'dataType:data-type'],
  type: "number",
  dataType: "range",
  didInsertElement() {
    $(this.$()).slider().textinput();
  }
});
