import Route from "@ember/routing/route";

export default class TriviaDataRoute extends Route {
  async model(params) {
    let questions = await this.store.findAll("question");

    console.log("The trivia-data model hook just ran!");

    return questions
      .filterBy("category", params.category)
      .filterBy("difficulty", params.difficulty);
  }
}
