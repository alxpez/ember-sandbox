import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list animals');


test('should show animals as the home page', function(assert) {
  visit('/')
  andThen(function() {
    assert.equal(currentURL(), '/animals', 'should redirect automatically')
  });
});

test('should link to information about animals site', function(assert) {
  visit('/')
  click('a:contains("About Animals")')
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about')
  });
});

test('should list all the animals', function(assert) {
  visit('/')
  andThen(function() {
    assert.equal(find('.listing').length, 5, 'should see 5 Pink Floyd songs')
  });
});

// test('should filter list of animals by category', function(assert) {
//
// });
//
// test('should show details of te selected animal', function(assert) {
//
// });
