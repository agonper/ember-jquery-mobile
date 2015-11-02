import JqmComponent from './jqm-component';
import layout from '../templates/components/jqm-ulistview';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'li',
  role: 'list-divider'
});
