import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';

let animal = EmberObject.create({
  image: 'fake.png',
  title: 'test-title',
  author: 'test-author',
  category: 'test-type',
  city: 'test-city',
  year: 3000
});

moduleForComponent('animal-list', 'Integration | Component | animal list', {
  integration: true
});

test('should display animal details', function(assert) {
  this.set('animalObj', animal);
  this.render(hbs`{{animal-list animal=animalObj}}`);
  assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
  assert.equal(this.$('.listing .owner').text().trim(), 'Author/s: test-author', 'Author/s: test-author');
});

test('should toggle wide class on click', function(assert) {
  this.set('animalObj', animal);
  this.render(hbs`{{animal-list animal=animalObj}}`);
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
