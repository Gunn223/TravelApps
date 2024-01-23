const midtransClient = require('midtrans-client');

console.log('serverkey', process.env.SERVER_KEY);
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: 'SB-Mid-server-lZsaDfZ8_G7hD-GFHXH_LBEQ',
  clientKey: 'SB-Mid-client-pb78hw7xCh1fg48O',
});

let parameter = {
  transaction_details: {
    order_id: 'YOUR-ORDERID-123456',
    gross_amount: 10000,
  },
  credit_card: {
    secure: true,
  },
  customer_details: {
    first_name: 'budi',
    last_name: 'pratama',
    email: 'budi.pra@example.com',
    phone: '08111222333',
  },
};
snap.createTransaction(parameter).then((transaction) => {
  // transaction token
  console.log("'transaction", transaction);
  let transactionToken = transaction.token;
  console.log('transactionToken:', transactionToken);
});
