type Slices = 4 | 6 | 8;

export interface Pizza {
  flavor: string;
  slices: Slices;
}

export type Common = 'Calabresa' | 'Frango' | 'Pepperoni';

export type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelos';

export type Sugar = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

export interface PizzaCommon extends Pizza {
  flavor: Common
}