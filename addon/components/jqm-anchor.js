import $ from 'jquery';
import Ember from 'ember';
import layout from '../templates/components/jqm-anchor';
import JqmBtnType from './jqm-btn-type';

export default JqmBtnType.extend({
  layout: layout,
  tagName: "a",
  attributeBindings: ['rel:data-rel'],
  isDisabled: false,

  // classNameBindings doesn't seem to be a reliable solution since
  // on value change all classes are being removed
  enabledStatus: Ember.on('didInsertElement',
    Ember.observer('isDisabled', function() {
      if (this.get('isDisabled')) {
        $(this.$()).addClass('ui-disabled');
        return 'disabled';
      } else {
        $(this.$()).removeClass('ui-disabled');
        return 'enabled';
      }
    }
  )),
  didInsertElement() {
    $(this.$()).buttonMarkup();
  }
});
