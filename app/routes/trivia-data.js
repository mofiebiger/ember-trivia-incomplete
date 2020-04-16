import Route from "@ember/routing/route";

export default class TriviaDataRoute extends Route {
  async model(params) {
    let questions = await this.store.findAll("question");
    
    return questions
      .filterBy("category", params.category)
      .filterBy("difficulty", params.difficulty);
  }
}
