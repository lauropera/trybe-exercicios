export default class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('bi bi bi bi');
  }
  turnOn(): void {
    console.log('ligou o carro');
  }
  turnOff(): void {
    console.log('desligou o carro');
  }
  speedUp(): void {
    console.log('acelerou');
  }
  speedDown(): void {
    console.log('desacelerou');
  }
  stop(): void {
    console.log('parou o carro');
  }
  turn(direction: string) {
    console.log(`o carro virou para ${direction}`);
  }
}
