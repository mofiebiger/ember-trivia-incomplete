import Route from '@ember/routing/route';

export default class TriviaDataQuestionThreeRoute extends Route {
  model() {
    let data = this.modelFor('trivia-data');
    return data[2];
  }
}
