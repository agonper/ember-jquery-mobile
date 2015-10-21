import layout from '../templates/components/jqm-select';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'select',
  attributeBindings: ['mini:data-mini', 'iconPos:data-iconpos']
});
