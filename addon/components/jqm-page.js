import $ from 'jquery';
import layout from '../templates/components/jqm-page';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'section',
  classNameBindings: ['ui-page-active'],
  role: 'page',
  didInsertElement() {
    $.mobile.initializePage();
    $.mobile.resetActivePageHeight();
    $('.ui-loader').hide();
  }
});
