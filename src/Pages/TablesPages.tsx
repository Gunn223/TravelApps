import React from 'react';
import Table from '../fragments/Table';
const TablesPages = () => {
  return (
    <>
      <>
        <h1>Table user</h1>
        <Table tableType="user" />
        <h1>Table destination</h1>
        <Table tableType="destination" />
        <h1>Table booking</h1>
        <Table tableType="booking" />
        <h1>Table history</h1>
        <Table tableType="history" />
      </>
    </>
  );
};

export default TablesPages;
