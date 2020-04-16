import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | trivia-data/question-two', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:trivia-data/question-two');
    assert.ok(route);
  });
});
