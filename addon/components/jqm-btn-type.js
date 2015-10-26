import JqmComponent from './jqm-component'
import layout from '../templates/components/jqm-btn-type';

export default JqmComponent.extend({
  layout: layout,
  attributeBindings: ['corners:data-corners', 'icon:data-icon', 'iconPos:data-iconpos'],
  click() {
    this.sendAction();
  }
});
