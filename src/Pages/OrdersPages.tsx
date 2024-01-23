import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Paper } from '@mui/material';
import Deposits from '../materialUI/Deposits';

const OrdersPages = () => {
  const paymentData = [
    { id: 1, date: '2022-01-15', amount: 100, status: 'Paid' },
    { id: 2, date: '2022-01-18', amount: 150, status: 'Pending' },
    // Tambahkan data pembayaran lainnya sesuai kebutuhan Anda
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
        <Paper
          className="flex-grow-1"
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}>
          <Deposits />
        </Paper>
      </div>
      <h1>Payment History</h1>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.date}</td>
              <td>${payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPages;
