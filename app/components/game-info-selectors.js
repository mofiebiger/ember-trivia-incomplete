import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class GameInfoSelectorsComponent extends Component {
  @tracked category;
  @tracked difficulty;
  @tracked selectedArray = [];
}
