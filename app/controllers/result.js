import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class ResultController extends Controller {
  queryParams = ["score"];

  @tracked score = null;

  @tracked model;
}
