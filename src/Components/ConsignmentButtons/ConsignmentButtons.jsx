
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
    // Filter function
    const handleFilter = () => {
        const filtered = data.filter(data => 
            data.consigncode && data.toLowerCase().includes(filterCriteria.toLowerCase())
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
            <Button id="assigned" onClick={() => handleFilter("Assigned")} style={{
              background: activeButton === "Assigned" ? "green" : "white", 
              color: activeButton === "Assigned" ? "white" : "gray", 
            }}>Assigned</Button>
          </Link>
          <Link to="/consignment-table" style={{ textDecoration: "none" }}>
            <Button id="unassigned" onClick={() => handleFilter("Unassigned")} style={{
              background: activeButton === "Unassigned" ? "green" : "white", 
              color: activeButton === "Unassigned" ? "white" : "grey", 
            }}>Unassigned</Button>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
        <input 
                type="file" 
                accept=".csv" // Accept only CSV files
                onChange={handleFileImport} // Call import function on file change
                style={{ display: 'none' }} // Hide the file input
                ref={fileInputRef} // Attach ref to the input
            />
        <Tooltip title ="Import">
          <Button id="import" onClick={() => fileInputRef.current.click()}>
            <CiImport />
          </Button>
         
         
          </Tooltip>
          <Tooltip title="Export">
          <Button id="export">
            <CiExport />
          </Button>
          </Tooltip>
          <Tooltip title="Sort">
          <Button id="sort">
            <CgSortAz />
          </Button>
          </Tooltip>
          <div id="filter-button">
         
          {showFilter ? 'Hide Filter' : 'Show Filter'}
          {showFilter && (
          <TextField
                label="Filter Consignment Items" // Label for the input
                variant="outlined" // MUI variant for styling
                value={filterCriteria} // Controlled input value
                onClick={() => setShowFilter(!showFilter)}// Update state on change
                
                style={{ marginBottom: '20px' }} // Styling for spacing
            />
          )}
            <Tooltip title="Filter">
             <Button id="filter" onClick={handleFilter} variant="contained" >
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
