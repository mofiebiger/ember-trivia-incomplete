import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | trivia-data/question-three', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:trivia-data/question-three');
    assert.ok(route);
  });
});
