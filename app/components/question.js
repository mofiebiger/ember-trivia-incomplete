import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';

export default class QuestionComponent extends Component {
  @service store;

  @tracked isAnswered = false;
  @tracked correct = null;

  /*
    Component arguments:
    @id: String,
    @correctAnswer: String,
    @question: String,
    @options: Array,
    @score: Boolean,
  */

  @action
  calculateAnswer(selectedAnswer) {
    let { id , correctAnswer } = this.args;

    this.isAnswered = true;

    if (correctAnswer === selectedAnswer) {

      this.correct = true;

      this.store.findRecord('question', id).then(function(score) {
        score.score = true;
      });
    }
    else{
      this.correct = false;
    }
  }

  get style() {
    let color;
    if(this.correct === true){
      color = "green";
    }
    if(this.correct === false) {
      color = "red";
    }

    return htmlSafe(`background-color: ${color}`);
  }
}
