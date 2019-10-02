import { find } from '@ember/test-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jqm-collapsibleset', 'Integration | Component | jqm collapsibleset', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{jqm-collapsibleset}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#jqm-collapsibleset}}
      template block text
    {{/jqm-collapsibleset}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
