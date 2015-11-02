import JqmComponent from './jqm-component';
import layout from '../templates/components/jqm-ulistview';

export default JqmComponent.extend({
  layout: layout,
  attributeBindings: ['inset:data-inset', 'filter:data-filter', 'filterPlaceholder:data-filter-placeholder',
    'filterReveal:data-filter-reveal', 'input:data-input', 'autodividers:data-autodividers',
    'splitIcon:data-spliticon', 'splitTheme:data-split-theme', 'dividerTheme:data-divider-theme',
    'countTheme:data-count-theme'],
  role: 'listview'
});
