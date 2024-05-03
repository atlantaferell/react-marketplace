import React from 'react';
import { useLocation } from 'react-router-dom';

export const InvoicePage = () => {
  const location = useLocation();
  const { date, totalAmount } = location.state;

  return (
    <div>
      <h1>Invoice</h1>
      <p>Tanggal Checkout: {date}</p>
      <p>Total Pembayaran: Rp.{totalAmount}</p>
    </div>
  );
};