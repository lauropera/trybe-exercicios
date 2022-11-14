import IEnrollable from './IEnrollable';
import Person from './Person';
import { randomBytes } from 'crypto';
import EvaluationResult from './EvaluationResult';

class Student extends Person implements IEnrollable {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.'
      );
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    return this.examsGrades
      .concat(this.worksGrades)
      .reduce((acc, curr) => acc + curr, 0);
  }

  sumAverageGrade(): number {
    const divisor = this.examsGrades.length + this.worksGrades.length;
    return this.sumGrades() / divisor;
  }

  generateEnrollment(): string {
    const code = randomBytes(6).toString('hex');
    return `STD-${code}`;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}

export default Student;
