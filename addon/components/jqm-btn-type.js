import $ from 'jquery';
import Ember from 'ember';
import JqmComponent from './jqm-component';
import layout from '../templates/components/jqm-btn-type';

export default JqmComponent.extend({
  layout: layout,
  attributeBindings: ['icon:data-icon', 'iconPos:data-iconpos', 'mini:data-mini', 'inline:data-inline',
    'title', 'autofocus', 'name', 'required'],
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
  click() {
    this.sendAction();
  }
});
