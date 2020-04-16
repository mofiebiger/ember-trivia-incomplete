import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';

export default class TriviaDataController extends Controller {
  @tracked category = null;
  @tracked difficulty = null;
  @tracked model;
  @tracked question = [];
  @tracked score;

  @action
  createScore(){
    // for(let i = 0; i < data.length; i++){
    //
    //   this.questions.pushObject(data[i].score);
    //   console.log(this.questions);
    //
    //   let correct = this.questions.filter(Boolean).length;
    //   let total = this.questions.length;
    //   this.score = Math.round((correct / total) * 100);
    //   console.log(this.score);
    //   return this.score;
    console.log(this.model);
  //}

  }

}
