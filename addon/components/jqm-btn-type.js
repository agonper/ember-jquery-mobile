import JqmComponent from './jqm-component';
import layout from '../templates/components/jqm-btn-type';

export default JqmComponent.extend({
  layout: layout,
  attributeBindings: ['icon:data-icon', 'iconPos:data-iconpos', 'mini:data-mini', 'inline:data-inline',
    'title', 'autofocus', 'name', 'required'],
  click() {
    this.sendAction();
  }
});
