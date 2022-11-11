// Order.ts
import Costumer from './Costumer';
import OrderItem from './OrderItem';

export default class Order {
  private _costumer: Costumer;
  private _costumerItems: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    costumer: Costumer,
    costumerItems: OrderItem[],
    paymentMethod: string,
    discount: number
  ) {
    this._costumer = costumer;
    this.costumerItems = costumerItems;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get costumer(): Costumer {
    return this._costumer;
  }

  set costumer(value: Costumer) {
    this._costumer = value;
  }

  get costumerItems(): OrderItem[] {
    return this._costumerItems;
  }

  set costumerItems(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.');
    }

    this._costumerItems = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._discount = value;
  }

  calculateTotal(): number {
    return this.costumerItems.reduce((curr, { price }) => curr + price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

// Para testar!

const client = new Costumer('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.0);
const juice = new OrderItem('Suco de Abacaxi', 5.0);
const dessert = new OrderItem('Gelatina de Uva', 2.5);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.1);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
