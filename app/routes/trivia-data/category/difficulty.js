import Route from "@ember/routing/route";

export default class TriviaDataCategoryDifficultyRoute extends Route {
  model(params) {
    console.log("The difficulty model hook just ran!");
    let difficulty = this.store.findAll("question", params.difficulty);
    return difficulty.filterBy("category", params.difficulty);
  }
}
