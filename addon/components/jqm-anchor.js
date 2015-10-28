import layout from '../templates/components/jqm-anchor';
import JqmBtnType from './jqm-btn-type';

export default JqmBtnType.extend({
  layout: layout,
  tagName: "a",
  attributeBindings: ['rel:data-rel'],
  classNames: ['ui-btn']
});
