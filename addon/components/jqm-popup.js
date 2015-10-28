import $ from 'jquery';
import layout from '../templates/components/jqm-popup';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  attributeBindings: ['dismissible:data-dismissible', 'position:data-position', 'overlay-theme:data-overlay-theme', 'corners:data-corners'],
  classNameBindings: ['ui-popup'],
  role: 'popup',
  transition: 'pop',
  didInsertElement() {
    $(this.$()).enhanceWithin().popup();
    $(this.$()).popup('option', 'transition', this.get('transition'));
  },
  actions: {
    closePopup() {
      $(this.$()).popup('close');
    }
  }
});
