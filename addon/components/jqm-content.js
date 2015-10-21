import layout from '../templates/components/jqm-content';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  classNameBindings: ['content'],
  role: 'content'
});
