
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { Button, ButtonGroup, Typography, Tooltip, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import FilterList from '@mui/icons-material/FilterList';



const data = [
  {
    consigncode: "123",
    priority: "High",
    vehicledriver: "Otieno Alouoch",
    evnt: "Finished",
    consignor: "Test consignor",
    consignee: "Test Consignee",
    location: "Rongai",
    transporter: "Test Transporter",
  },
  {
    consigncode: "124",
    priority: "Normal",
    vehicledriver: "Jane Doe",
    evnt: "In Transit",
    consignor: "Another consignor",
    consignee: "Another Consignee",
    location: "Nairobi",
    transporter: "Another Transporter",
  },
  {
    consigncode: "125",
    priority: "High",
    vehicledriver: "John Smith",
    evnt: "Pending",
    consignor: "Third consignor",
    consignee: "Third Consignee",
    location: "Mombasa",
    transporter: "Third Transporter",
  },
];
let totalData = data.length;

function ConsignmentButton() {
  
    const [activeButton, setActiveButton] = useState("assigned");

    const [filterCriteria, setFilterCriteria] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [showFilter, setShowFilter] = useState(false);

    const [importedData, setImportedData] = useState([]);
    const fileInputRef = useRef(null); 

    const [sortDirection, setSortDirection] = useState("asc"); // Sorting direction
    const [sortedData, setSortedData] = useState(data);

    const handleSort = () => {
      const newDirection = sortDirection === "asc" ? "desc" : "asc";
      setSortDirection(newDirection);

      const sorted = [...sortedData].sort((a, b) => {
          if (newDirection === "asc") {
              return a.consigncode.localeCompare(b.consigncode);
          } else {
              return b.consigncode.localeCompare(a.consigncode);
          }
      });

      setSortedData(sorted);
  };
  
  
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
  };

    const handleFilter = (e) => {
      const criteria = e.target.value;
      setFilterCriteria(criteria);
  
      const filtered = data.filter(
        (item) =>
          item.consigncode.toLowerCase().includes(criteria.toLowerCase()) ||
          item.priority.toLowerCase().includes(criteria.toLowerCase()) ||
          item.vehicledriver.toLowerCase().includes(criteria.toLowerCase())
      );
      setFilteredData(filtered);
    };
   

    const handleFileImport = (event) => {
      const file = event.target.files[0]; // Get the uploaded file
      if (file) {
          const reader = new FileReader(); // Create a FileReader to read the file
          reader.onload = (e) => {
              const text = e.target.result; // Get the file content
              const data = text.split('\n').map(line => {
                  const [id, name] = line.split(','); // Assuming CSV format
                  return { id: parseInt(id), name: name.trim() };
              });
              setImportedData(data); // Set the imported data
              console.log('Imported Data:', data); // Debugging log
          };
          reader.readAsText(file); // Read the file as text
      }
  };

  const handleExport = () => {
    const csvData = importedData.map(item => `${item.id},${item.name}`).join('\n'); // Convert data to CSV format
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' }); // Create a Blob object
    const url = URL.createObjectURL(blob); // Create a URL for the Blob

    const link = document.createElement('a'); // Create an anchor element
    link.setAttribute('href', url); // Set the href to the Blob URL
    link.setAttribute('download', 'exported_data.csv'); // Set the filename for download
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link from the document

    
};

    return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >


        <div style={{ display: "flex" }}>
          <Link to="/consignment-table-2" style={{ textDecoration: "none" }}>
            <Button id="assigned"  onClick={() => handleButtonClick('assigned')} style={{
        background: activeButton === "assigned" ? "green" : "white", 
        color: activeButton === "assigned" ? "white" : "green", 
      }}>Assigned</Button>
          </Link>
          <Link to="/consignment-table" style={{ textDecoration: "none" }}>
            <Button id="unassigned"  onClick={() => handleButtonClick('unassigned')} style={{
        background: activeButton === "unassigned" ? "green" : "white", 
        color: activeButton === "unassigned" ? "white" : "green", 
      }}>Unassigned</Button>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
        <input 
                type="file" 
                accept=".csv" 
                onChange={handleFileImport} 
                style={{ display: 'none' }} 
                ref={fileInputRef} 
            />
            <div style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title ="Import">
          <Button id="import" onClick={() => fileInputRef.current.click()}>
            <CiImport />
          </Button>
         
         
          </Tooltip>
          <Tooltip title="Export">
          <Button id="export" onClick={handleExport}>
            <CiExport />
          </Button>
          </Tooltip>
          <Tooltip title="Sort">
          <>
          <Button id="sort" onClick={handleSort}>
            <CgSortAz />
          </Button>
          
          </>
          </Tooltip>

          <div id="filter-button">
         
          
          {showFilter && (
          <TextField
                label="Filter Consignment Items" // Label for the input
                variant="outlined" // MUI variant for styling
                value={filterCriteria} // Controlled input value
                onChange={handleFilter}
                
                style={{  position: 'absolute',  // Keep the input above the filter button
                  bottom: '40%',        // Position above the button
                  width: '200px',        // Adjust the width to fit your design
                  marginBottom: '10px',}} 
            />
          )}
          </div>
          </div>
          
          <div>
      {/* {filteredData.map((item) => (
        <div key={item.consigncode}>
          <p>{item.consigncode} - {item.vehicledriver} - {item.priority}</p>
        </div>
      ))} */}
    </div>
    <div id="filter-button" style={{ position: 'relative' }}>
            <Tooltip title="Filter">
             <Button id="filter" onClick={() => setShowFilter(!showFilter)} variant="contained" >
              <CiFilter />
              
            </Button>
            </Tooltip>
          </div>
          <Button id="rounded-1">+ Bulk Create</Button>
          <Button id="rounded-2">+ Create</Button>
        </div>
      </div>
      <Typography
        component="h2"
        style={{ fontSize: "24px", marginTop: "20px", marginBottom: "20px" }}
      >
        {totalData} Consignments
      </Typography>
    </>
  );
}
export default ConsignmentButton;
