import { randomBytes } from 'crypto';
import Person from './Person';

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

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

  private generateEnrollment(): string {
    const code = randomBytes(6).toString('hex');
    return `STU-${code}`
  }
}

export default Student;
