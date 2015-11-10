import $ from 'jquery';
import Ember from 'ember';
import layout from '../templates/components/jqm-datepicker';

export default Ember.TextField.extend({
  layout: layout,
  readonly: 'readonly',
  attributeBindings: ['required', 'name', 'autofocus'],
  dateFormat: 'dd/mm/yy',
  showToday: false,
  didInsertElement() {
    var elem = $(this.$());
    elem.datepicker({
      dateFormat: this.get('dateFormat')
    });

    if (this.get('showToday')) {
      elem.datepicker('setDate', new Date());
    }

    // Remove datepicker from the bottom of the page
    $( '.ui-datepicker' ).css('display', 'none');
  }
});
