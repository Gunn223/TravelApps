import React, { useState } from 'react';

const Table = ({ tableType }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const tableHeaders = {
    user: ['No', 'Username', 'Image Profile', 'Location', 'Bio', 'Cover Background', 'Email', 'Phone', 'Action'],
    destination: [
      'No',
      'Destination Name',
      'Price',
      'Description',
      'ImageUrl',
      'Fasilitas',
      'Date',
      'Kategori',
      'Kuota',
      'Action',
    ],
    booking: ['No', 'Id Booking', 'Date Booking', 'Status Destination', 'Destination ID', 'Action'],
    history: [
      'No',
      'History ID',
      'User ID',
      'Username',
      'Date Booking',
      'Status Destination',
      'Destination ID',
      'Title',
      'Price',
      'Action',
    ],
  };

  const tableData = {
    user: [
      [
        1,
        'User1',
        'cascsac',
        'Location1',
        'Bio1',
        'Cover1.jpg',
        'user1@example.com',
        '123-456-7890',
        ['Update', 'Delete'],
      ],
    ],
    destination: [
      [1, 'Destination1', 'Location1', 'Description1', 'Image1.jpg', 'xasc', 'ca', 'cac', 'cas', ['Update', 'Delete']],
    ],
    booking: [[1, 'User1', 'Destination1', '2022-01-01', 'Confirmed', ['Update', 'Delete']]],
    history: [
      [1, 123, 456, 'User1', '2022-01-01', 'Completed', 789, 'Destination1', 50, ['Update', 'Delete']],
      // Tambahkan baris sesuai kebutuhan Anda
    ],
  };

  // Fungsi untuk melakukan pencarian pada data tabel
  const filterData = (data, term) => {
    return data.filter((row) =>
      row.some((cell) =>
        Array.isArray(cell)
          ? cell.some((btn) => btn.toLowerCase().includes(term.toLowerCase()))
          : cell.toString().toLowerCase().includes(term.toLowerCase()),
      ),
    );
  };

  // Mendapatkan data setelah dilakukan pencarian
  const filteredData = filterData(tableData[tableType], searchTerm);

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder={`Search ${tableType}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-sticky table-bordered">
            <thead className="thead-dark">
              <tr>
                {tableHeaders[tableType].map((header, index) => (
                  <th
                    key={index}
                    scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {rowData.map((cellData, cellIndex) => (
                    <td key={cellIndex}>
                      {Array.isArray(cellData)
                        ? cellData.map((buttonLabel, buttonIndex) => (
                            <button
                              key={buttonIndex}
                              className={`btn ${buttonLabel === 'Delete' ? 'btn-danger' : 'btn-primary'}`}>
                              {buttonLabel}
                            </button>
                          ))
                        : cellData}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
