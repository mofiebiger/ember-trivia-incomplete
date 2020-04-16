import Route from '@ember/routing/route';

export default class TriviaDataQuestionOneRoute extends Route {
  model() {
    let data = this.modelFor('trivia-data');
    return data[0];
  }
}
