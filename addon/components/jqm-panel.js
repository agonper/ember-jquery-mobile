import $ from 'jquery';
import layout from '../templates/components/jqm-panel';
import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  layout: layout,
  role: "panel",
  attributeBindings: ['theme:data-theme', 'position:data-position',
    'display:data-display', 'dismissible:data-dismissible'],
  theme: 'a',
  position: 'left',
  display: 'overlay',
  dismissible: 'true',
  didInsertElement() {
    $(this.$()).panel({
      create: () => {
        $(this.$()).enhanceWithin();
        $(this.$()).panel('open');
      }
    });
    var that = this;
    $(this.$()).one("swipeleft swiperight", function() {
      that.changeRouteIfDefined(that);
    });
  },
  actions: {
    closePanel() {
      $(this.$()).panel('close');
      this.changeRouteIfDefined(this);
    }
  },
  changeRouteIfDefined(panel) {
    var routeOnClose = panel.get('routeOnClose');
    if (routeOnClose) {
      panel.get('targetObject').transitionToRoute(routeOnClose);
    }
  }
});
