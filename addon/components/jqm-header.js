import layout from '../templates/components/jqm-header';
import JqmToolbar from './jqm-toolbar';

export default JqmToolbar.extend({
  layout: layout,
  tagName: 'header',
  role: 'header'
});
