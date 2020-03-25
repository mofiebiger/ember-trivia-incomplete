import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import {
  selectChoose,
  clickTrigger
} from "ember-power-select/test-support/helpers";

module("Integration | Component | drop-down", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set("difficulty", ["Easy", "Medium", "Hard"]);
    this.set("selectedDifficulty", "Easy");

    await render(hbs`<DropDown
      @placeholder="Select difficulty"
      @options={{difficulty}}
      @selected={{selectedDifficulty}}
    />`);

    assert.equal(this.element.textContent.trim(), "Easy");

    await clickTrigger("[data-test-drop-down]");

    await selectChoose("[data-test-drop-down]", "Hard");

    assert.equal(
      this.element
        .querySelector(
          "[data-test-drop-down] .ember-power-select-selected-item"
        )
        .textContent.trim(),
      "Hard"
    );
  });
});
