import $ from 'jquery';
import layout from '../templates/components/jqm-select';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'select',
  attributeBindings: ['mini:data-mini', 'iconPos:data-iconpos', 'name', 'autocomplete', 'autofocus'],
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
          console.debug(this);
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
  }
});
