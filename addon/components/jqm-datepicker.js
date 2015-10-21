import $ from 'jquery';
import Ember from 'ember';
import layout from '../templates/components/jqm-datepicker';

export default Ember.TextField.extend({
  layout: layout,
  readonly: 'readonly',
  didInsertElement() {
    var elem = $(this.$());
    elem.datepicker({
      dateFormat: 'dd/mm/yy'
    });
    elem.datepicker('setDate', new Date());

    // Remove datepicker from the bottom of the page
    $( '.ui-datepicker' ).css('display', 'none');
  }
});
