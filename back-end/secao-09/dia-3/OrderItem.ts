export default class OrderItem {
  constructor(private _name: string, private _price: number) {
    this.name = _name;
    this.price = _price;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('3 char min');
    this._name = value;
  }

  set price(value: number) {
    if (value < 0) throw new Error('tem que ser positivo');
    this._price = value;
  }
}
