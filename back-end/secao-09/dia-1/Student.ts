export default class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  get name(): string {
    return this._name;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._examsGrades = value;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.'
      );
    }
    this._examsGrades = value;
  }

  sumGrades(): number {
    return this._examsGrades
      .concat(this._worksGrades)
      .reduce((curr, acc) => curr + acc, 0);
  }

  getGradesAvarage(): number {
    const gradesSum = this.sumGrades();
    const divider = this._examsGrades.length + this._worksGrades.length;
    return gradesSum / divider;
  }
}
