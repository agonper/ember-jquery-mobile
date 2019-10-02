import $ from 'jquery';
import Ember from 'ember';
import layout from '../templates/components/jqm-slider';

export default Ember.TextField.extend({
  layout: layout,
  attributeBindings: ['mini:data-mini', 'highlight:data-highlight', 'dataType:data-type', 'theme:data-theme',
    'autofocus', 'name', 'required', 'autocomplete'],
  type: "number",
  dataType: "range",
  didInsertElement() {
    var elem = $(this.$());
    elem.slider().textinput();
    elem.on("slidestop", () => {
      this.element.addEventListener();
    });
  }
});
