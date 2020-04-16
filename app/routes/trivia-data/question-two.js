import Route from '@ember/routing/route';

export default class TriviaDataQuestionTwoRoute extends Route {
  model() {
    let data = this.modelFor('trivia-data');
    return data[1];
  }
}
