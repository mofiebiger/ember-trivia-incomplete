import Route from "@ember/routing/route";
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from "@glimmer/tracking";

export default class ResultRoute extends Route {
  @tracked questions = [];

  model() {
    let data = this.modelFor('trivia-data');
    console.log("The result model hook just ran!")
    console.log(data);


    for(let i = 0; i < data.length; i++){
      this.questions.push(data[i].score);
      console.log(this.questions);
    }

    let correct = this.questions.filter(Boolean).length;
    console.log(correct);

    let total = this.questions.length;
    console.log(total);
    let score = Math.round((correct / total) * 100);
    console.log(score);
    return score;
  }
}
