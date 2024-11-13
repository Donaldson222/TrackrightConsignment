import React, { useState } from 'react';
import ConsignmentButton from './ConsignmentButton'; // Adjust the import path as necessary
import ConsignmentTable from './ConsignmentTable'; // Adjust the import path as necessary
import ConsignmentTable2 from './ConsignmentTable2'; // Adjust the import path as necessary

const ConsignmentDashboard = () => {
  const [filterCriteria, setFilterCriteria] = useState('');
  const [filteredData, setFilteredData] = useState(data); // Assuming 'data' is the original data array

  const handleFilter = (criteria) => {
    setFilterCriteria(criteria);
    const filtered = data.filter(
      (item) =>
        item.consigncode.toLowerCase().includes(criteria.toLowerCase()) ||
        item.priority.toLowerCase().includes(criteria.toLowerCase()) ||
        item.vehicledriver.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <ConsignmentButton onFilter={handleFilter} />
      <ConsignmentTable data={filteredData} />
      <ConsignmentTable2 data={filteredData} />
    </>
  );
};

export default ConsignmentDashboard;