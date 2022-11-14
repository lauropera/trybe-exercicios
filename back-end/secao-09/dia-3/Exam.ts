import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }

  set score(value: number) {
    if (value > 25) throw new Error('Pontuação máxima: 25');
    super.score = value;
  }
}