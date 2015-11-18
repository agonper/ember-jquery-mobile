import $ from 'jquery';
import Ember from 'ember';
import layout from '../templates/components/jqm-select';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'select',
  attributeBindings: ['mini:data-mini', 'iconPos:data-iconpos', 'name', 'autocomplete', 'autofocus'],
  checkRefresh: Ember.observer('options.@each.text', function () {
    // Wait for options to become filled
    Ember.run.once(this, 'refreshUi');
  }),
  isDisabled: false,
  change() {
    this.sendAction('action', $(this.$()).val());
  },
  didInsertElement() {
    this._super();

    // Since jQm Select is a complex component,
    // the only way to enable / disable is
    // doing this
    var that = this;
    $(this.$()).selectmenu({
      create: function () {
        that.addObserver('isDisabled', function () {
          if (this.get('isDisabled')) {
            $(this.$()).selectmenu('disable');
            return 'disabled';
          } else {
            $(this.$()).selectmenu('enable');
            return 'enabled';
          }
        });
        that.notifyPropertyChange('isDisabled');
      }
    });
  },
  refreshUi() {
    // Force select to refresh
    $(this.$()).selectmenu('refresh', true);
  }
});
