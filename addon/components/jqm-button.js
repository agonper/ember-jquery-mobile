import layout from '../templates/components/jqm-button';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'button',
  classNameBindings: ['ui-btn'],
  click() {
    this.sendAction();
  }
});
