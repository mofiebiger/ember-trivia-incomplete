import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class QuestionComponent extends Component {
  @tracked isAnswered = false;
  @tracked questions = [];
  @tracked correctAnswer;
  @tracked score;

  calculateAnswer(correctAnswer, selectedAnswer) {
    this.isAnswered = true;

    if (correctAnswer === selectedAnswer) {
      this.correctAnswer = true;
      this.questions.push(true);
      return true;
    }

    this.correctAnswer = false;
    this.questions.push(false);

    return false;
  }

  calculateScore(correctAnswer, selectedAnswer) {
    this.calculateAnswer(correctAnswer, selectedAnswer);

    console.log(this.questions.length);

    let correct = this.questions.filter(Boolean).length;
    let total = this.questions.length;
    this.score = Math.round((correct / total) * 100);
    console.log(this.score);
    return this.score;
  }
}
