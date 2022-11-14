import Teacher from './Teacher';

export default class Evaluation {
  constructor(private _score: number, private _teacher: Teacher) {
    this.score = _score;
    this.teacher = _teacher;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('Pontuação nao pode ser negativa');
    this._score = value;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }
}
