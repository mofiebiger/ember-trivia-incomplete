import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class TriviaDataController extends Controller {
  queryParams = ["category", "difficulty", "id"];

  @tracked category = null;
  @tracked difficulty = null;
  @tracked id = null;

  @tracked model;
}
