import Employee from './Employee';
import Subject from './Subject';
import { randomBytes } from 'crypto';

class Teacher extends Employee {
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    private _subject: Subject
  ) {
    super(name, birthDate, salary);

    this.subject = _subject;
    this.enrollment = this.generateEnrollment();
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(value: Subject) {
    this._subject = value;
  }

  generateEnrollment(): string {
    const code = randomBytes(6).toString('hex');
    return `TCH-${code}`;
  }
}

export default Teacher;
