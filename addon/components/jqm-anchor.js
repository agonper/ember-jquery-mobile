import layout from '../templates/components/jqm-anchor';
import JqmBtnType from './jqm-btn-type';

export default JqmBtnType.extend({
  layout: layout,
  nameTag: "a",
  attributeBindings: ['rel:data-rel']
});
