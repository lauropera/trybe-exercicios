import Order from './Order';
import Person from './Person';

export default class OrderRepository {
  private _orders: Order[] = [];

  public get orders(): Order[] {
    return this._orders;
  }

  public addOrder(value: Order): void {
    this.orders.push(value);
  }

  public removeOrder(value: Order): void {
    this._orders = this.orders.filter((order) => order !== value);
  }

  public listByClient(value: Person): Order[] {
    return this.orders.filter(({ client }) => client === value);
  }
}
