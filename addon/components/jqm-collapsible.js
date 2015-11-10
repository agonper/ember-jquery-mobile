import JqmComponent from './jqm-component';
import layout from '../templates/components/jqm-collapsible';

export default JqmComponent.extend({
  layout: layout,
  role: 'collapsible',
  attributeBindings: ['collapsed:data-collapsed', 'mini:data-mini', 'collapsedIcon:data-collapsed-icon',
    'expandedIcon:data-expanded-icon', 'iconPos:data-iconpos', 'inset:data-inset']
});
