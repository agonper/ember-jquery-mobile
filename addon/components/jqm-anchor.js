import layout from '../templates/components/jqm-anchor';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  nameTag: "a",
  attributeBindings: ['rel:data-rel'],
  click() {
    this.sendAction();
  }
});
