import JqmTextInput from './jqm-textinput';
import layout from '../templates/components/jqm-fileinput';

export default JqmTextInput.extend({
  layout: layout,
  type: 'file',
  //file: null,
  //uploading: false,
  onFile: null, // Callback function <Action>
  change(evt) {
    if (this.get('onFile')) {
      this.sendAction('onFile', evt);
    }
  }
});
