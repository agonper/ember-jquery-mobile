import $ from 'jquery';
import layout from '../templates/components/jqm-page';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  tagName: 'section',
  classNameBindings: ['ui-page-active'],
  role: 'page',
  didInsertElement() {
    // This makes first load faster and good rendered
    $( document ).trigger('jqm.init-page');
    $( document ).unbind('jqm.init-page').bind('jqm.init-page', () => {
      $.mobile.initializePage();
      $('.ui-loader').hide();
    });
  }
});
