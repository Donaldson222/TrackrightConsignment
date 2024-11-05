import React from 'react'


const data = [
    {consigncode: "123", vehicledriver: "Otieno Alouoch", evnt:"Finished", consignor:"Test consignor", consignee:"Test Consignee", location:"Rongai", transporter:"Test Transporter"},
    {consigncode: "124", vehicledriver: "Jane Doe", evnt:"In Transit", consignor:"Another consignor", consignee:"Another Consignee", location:"Nairobi", transporter:"Another Transporter"},
    {consigncode: "125", vehicledriver: "John Smith", evnt:"Pending", consignor:"Third consignor", consignee:"Third Consignee", location:"Mombasa", transporter:"Third Transporter"},
  ];

  function App() {
    return (
        <div className="App">
              <button onClick={handleSelectAll}>
        {selected.every(Boolean) ? 'Deselect All' : 'Select All'}
      </button>
      <table>
        <thead>
          <tr>
            <th><input 
                type="checkbox" 
                checked={selected.every(Boolean)} 
                onChange={handleSelectAll} 
              /></th>
            <th>Consign Code</th>
            <th>Vehicle/Driver</th>
            <th>Event</th>
            <th>Consignor</th>
            <th>Consignee</th>
            <th>Location</th>
            <th>Transporter</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selected[index]} 
                  onChange={() => handleCheckboxChange(index)} 
                />
              </td>
              <td>{val.consigncode}</td>
              <td>{val.vehicledriver}</td>
              <td>{val.evnt}</td>
              <td>{val.consignor}</td>
              <td>{val.consignee}</td>
              <td>{val.location}</td>
              <td>{val.transporter}</td>
              <td className="icon-container">
              <button id="delete"type="button">
              <MdDeleteOutline />
               </button>
               <button id="edit"type="button">
               <FaEdit />
               </button>
               <button id="copy"type="button">
               <IoCopyOutline />
               </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}
