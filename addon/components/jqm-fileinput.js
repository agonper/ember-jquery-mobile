import JqmTextInput from './jqm-textinput';
import layout from '../templates/components/jqm-fileinput';

export default JqmTextInput.extend({
  layout: layout,
  type: 'file',
  file: null,
  uploading: false,
  onLoad: null, // Callback function <Action>
  change(evt) {
    var file = evt.target.files[0];

    if (file && !this.get('uploading')) {
      this.set('uploading', true);
      var reader = new FileReader();
      reader.onload = () => {
        this.set('file', reader.result);
        let onLoad = this.get('onLoad');
        if (onLoad) {
          this.sendAction('onLoad');
        }
      };
      reader.onloadend = () => {
        this.set('uploading', false);
      };
      reader.readAsDataURL(file);
    } else {
      this.set('file', null);
    }
  }
});
