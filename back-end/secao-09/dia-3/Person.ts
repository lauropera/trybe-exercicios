abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('3 caracteres no minimo');
    }
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('Nasceu no futuro');
    if (Person.getAge(value) > 120) throw new Error('Precisa ter menos de 120 anos');
  }

  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }
}

export default Person;
