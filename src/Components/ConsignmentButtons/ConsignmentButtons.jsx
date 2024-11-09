
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { Button, ButtonGroup, Typography, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
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

    const handleButtonClick = (title) => {
      setActiveButton(title);
    };
  
    const [filteredData, setFilteredData] = useState("");
    const [filter, setFilter] = useState("");
  
    // Filter function
    const applyFilter = () => {
      const newFilteredData = data.filter((item) => item.evnt === filter);
      setFilteredData(newFilteredData);
    };
  
    
    const filteredCount = filteredData.length;

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
            <Button id="assigned" onClick={() => handleButtonClick("Assigned")} style={{
              background: activeButton === "Assigned" ? "green" : "white", 
              color: activeButton === "Assigned" ? "white" : "gray", 
            }}>Assigned</Button>
          </Link>
          <Link to="/consignment-table" style={{ textDecoration: "none" }}>
            <Button id="unassigned" onClick={() => handleButtonClick("Unassigned")} style={{
              background: activeButton === "Unassigned" ? "green" : "white", 
              color: activeButton === "Unassigned" ? "white" : "grey", 
            }}>Unassigned</Button>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title ="Import">
          <Button id="import">
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
            <Tooltip title="Filter">
             <Button id="filter" onClick={applyFilter} variant="contained" >
              <CiFilter />
              {filteredCount}
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
