import $ from 'jquery';
import layout from '../templates/components/jqm-toolbar';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  attributeBindings: ['position:data-position'],
  didInsertElement() {
    $(this.$()).toolbar();
    $.mobile.resetActivePageHeight();
  }
});
