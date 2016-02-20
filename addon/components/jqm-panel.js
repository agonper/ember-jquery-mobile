import $ from 'jquery';
import layout from '../templates/components/jqm-panel';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  role: "panel",
  attributeBindings: ['theme:data-theme', 'position:data-position',
    'display:data-display', 'dismissible:data-dismissible'],
  theme: 'a',
  animate: false,
  position: 'left',
  display: 'overlay',
  dismissible: 'true',
  didInsertElement() {

    var elem = $(this.$());

    elem.panel({
      create: () => {
        elem.enhanceWithin();
        elem.panel('open');
      },
      animate: this.get('animate'),
      position: this.get('position')
    });

    var that = this;

    var swipe = this.get('position') === 'left' ? 'swipeleft' : 'swiperight';
    $(this.$()).one(swipe, function() {
      that.changeRouteIfDefined(that);
    });

    this.set('elem', elem);
  },
  actions: {
    closePanel() {
      this.changeRouteIfDefined(this);
    }
  },
  changeRouteIfDefined(panel) {
    $(this.$()).panel('close');

    var routeOnClose = panel.get('routeOnClose');
    if (routeOnClose) {
      panel.get('targetObject').transitionToRoute(routeOnClose);
    }
  },
  willDestroy() {
    var elem = this.get('elem');
    elem.panel('close');
    elem.remove();
    $.mobile.resetActivePageHeight();
  }
});
