import JqmComponent from './jqm-component';
import layout from '../templates/components/jqm-collapsibleset';

export default JqmComponent.extend({
  layout: layout,
  role: 'collapsibleset',
  attributeBindings: ['contentTheme:data-content-theme', 'inset:data-inset', 'mini:data-mini',
    'collapsedIcon:data-collapsed-icon', 'expandedIcon:data-expanded-icon']

});
