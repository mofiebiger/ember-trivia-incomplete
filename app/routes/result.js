import Route from "@ember/routing/route";

export default class ResultRoute extends Route {
  model(params) {
    console.log("The result model hook just ran!");
    console.log(params.score);
    return params.score;
  }
}
