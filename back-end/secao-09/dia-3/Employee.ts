import IEnrollable from './IEnrollable';
import Person from './Person';
import { randomBytes } from 'crypto';

class Employee extends Person implements IEnrollable {
  private _enrollment: string = String();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, private _salary: number) {
    super(name, birthDate);

    this.salary = _salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    if (value < 0) {
      throw new Error('Valor inválido');
    }

    this._salary = value;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }

    this._admissionDate = value;
  }

  generateEnrollment(): string {
    const code = randomBytes(6).toString('hex');
    return `FUNC-${code}`;
  }
}

export default Employee;
