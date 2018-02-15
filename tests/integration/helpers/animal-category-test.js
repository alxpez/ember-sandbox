import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('animal-category', 'helper:animal-category', {
  integration: true
});

test('it renders correctly for a dark song', function(assert) {
  this.set('inputValue', 'sad');

  this.render(hbs`{{animal-category inputValue}}`);

  assert.equal(this.$().text().trim(), 'ToT');
});

test('it renders correctly for a happy song', function(assert) {
  this.set('inputValue', 'light');

  this.render(hbs`{{animal-category inputValue}}`);

  assert.equal(this.$().text().trim(), '@.o');
});
