import Model, { attr } from "@ember-data/model";

export default class QuestionModel extends Model {
  @attr category;
  @attr difficulty;
  @attr question;
  @attr correct_answer;
  @attr incorrect_answers;
  @attr question_type;
}
