import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
//import { getJSON } from "mo-trivia-game/controllers/trivia-api-end-point";

export default class GameInfoSelectorsComponent extends Component {
  @tracked category;
  @tracked difficulty;

  handleSubmit() {
    let selectedArray = [this.category, this.difficulty];

    return selectedArray;
  }
}
