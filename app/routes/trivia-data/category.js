import Route from "@ember/routing/route";

export default class TriviaDataCategoryRoute extends Route {
  model(params) {
    console.log("The category model hook just ran!");
    let category = this.store.findAll("question", params.category);
    return category.filterBy("category", params.category);
  }
}
