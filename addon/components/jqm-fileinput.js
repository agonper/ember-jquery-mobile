import JqmTextInput from './jqm-textinput';
import layout from '../templates/components/jqm-fileinput';

export default JqmTextInput.extend({
  layout: layout,
  attributeBindings: ['accept'],
  type: 'file',
  change(evt) {
    /**
     * @Deprecated
     */
    if (this.get('onFile')) {
      this.sendAction('onFile', evt);
    }
    this.set('files', evt.target.files);
  },
  didInsertElement() {
    if (this.get('onFile')) {
      console.warn("DEPRECATED: you should no longer use jqm-fileinput <action on='change'> use files instead. -- will be removed in 1.1");
    }
  }
});
