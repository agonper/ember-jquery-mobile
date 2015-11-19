import JqmTextInput from './jqm-textinput';
import layout from '../templates/components/jqm-fileinput';

export default JqmTextInput.extend({
  layout: layout,
  attributeBindings: ['accept'],
  type: 'file',
  onFile: null, // Callback action. onFile(evt)
  change(evt) {
    if (this.get('onFile')) {
      this.sendAction('onFile', evt);
    }
  }
});
