const order = {
  name: 'Rafael Andrade',
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
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
 const entregador = order.order.delivery.deliveryPerson;
 const cliente = order.name;
 const tel = order.phoneNumber;
 const endereço = `R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`;
  
  return `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${tel}, ${endereço}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva' 
  const cliente = order.name;
  const pedido = `${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type}`;
  order.payment.total = 50;
  const valorPedido = order.payment.total;

  return `Olá ${cliente}, o total do seu pedido de ${pedido} é R$ ${valorPedido},00`;
}

console.log(orderModifier(order));