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
    /**
     * @Deprecated avoid using action, will be removed on 1.1
     */
    if (this.get('action')) {
      this.sendAction('action', $(this.$()).val());
    }
    this.set('value', $(this.$()).val());
  },

  // Listen to external value changes to select one option
  valueChange: Ember.on('init', Ember.observer('value', function () {
    $(this.$()).val(this.get('value'));
    Ember.run.once(this, 'refreshUi'); // The placeholder has changed, refresh ui when possible
  })),
  didInsertElement() {
    this._super();

    // Check if the developer entered an action
    if (this.get('action')) {
      console.warn("DEPRECATED: you should no longer use jqm-select <action on='change'> use value instead. -- will be removed in 1.1");
    }

    // Take some decisions about the initial status
    if (!this.get('value')){ // If not value selected, then
      this.set('value', $(this.$()).val()); // Set initial value
    } else {
      this.notifyPropertyChange('value'); // Change default selected value
    }

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
