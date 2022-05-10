const order = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 50,
  },
};

// const customerInfo = (order) => {
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const clientName = order['name'];
//   const clientPhone = order['phoneNumber'];
//   const clientStreet = order.address['street'];
//   const clientHouseNumber = order.address['number'];
//   const clientApartment = order.address['apartment'];
//   return `Olá ${deliveryPerson}, entrega para: ${clientName}, Telefone: ${clientPhone}, R. ${clientStreet}, Nº: ${clientHouseNumber}, AP: ${clientApartment}.`;
// };

// customerInfo(order);

const orderModifier = (order) => {
  const clientName = order['name'];
  const drink = order.order.drinks.coke['type'];
  const total = order.payment['total'];
  return `Olá ${clientName}, o total do seu pedido de marguerita, pepperoni e ${drink} é R$${total},00.`;
};

console.log(orderModifier(order));
