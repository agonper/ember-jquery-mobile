import JqmComponent from './jqm-component';
import layout from '../templates/components/jqm-listitem';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'li',
  attributeBindings: ['icon:data-icon']
});
