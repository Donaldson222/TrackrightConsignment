import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md"; 
import { FaEdit } from "react-icons/fa"; 
import { IoCopyOutline } from "react-icons/io5"; 
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";

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

function ConsignmentTable() {
  const [selected, setSelected] = useState(new Array(data.length).fill(false));
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleSelectAll = () => {
    const newSelected = selected.map(() => !selected.every(Boolean));
    setSelected(newSelected);
  };

  const handleCheckboxChange = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };
  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selected.every(Boolean)}
                  onChange={handleSelectAll}
                  color="primary"
                />
              </TableCell>
              <TableCell>Consign Code</TableCell>
              <TableCell>Vehicle/Driver</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Consignor</TableCell>
              <TableCell>Consignee</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Transporter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, index) => (
              <TableRow
                key={index}
                className="table-row-hover"
                hover
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ position: "relative" }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected[index]}
                    onChange={() => handleCheckboxChange(index)}
                    color="primary"
                  />
                </TableCell>
                <TableCell>{val.consigncode}</TableCell>
                <TableCell>{val.vehicledriver}</TableCell>
                <TableCell>{val.evnt}</TableCell>
                <TableCell>{val.consignor}</TableCell>
                <TableCell>{val.consignee}</TableCell>
                <TableCell>{val.location}</TableCell>
                <TableCell style={{ position: "relative" }}>
                <div
                    style={{
                      display: hoveredIndex === index ? "none" : "block",
                      whiteSpace: "nowrap",
                      position: "relative",
                
                    }}
                  >{val.transporter}
                  </div>
                  </TableCell>


                <TableCell style={{ position: "relative" }}>
                <div
                    style={{
                      position: "absolute",
                      right: 0,
                      display: hoveredIndex === index ? "flex" : "none",
                      gap: "5px",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "20%",
                    }}
                  >
                 
                    <Button id="delete-button">
                      <MdDeleteOutline />
                    </Button>
                    <Button id="edit-button">
                      <FaEdit />
                    </Button>
                    <Button id="copy-button">
                      <IoCopyOutline />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ;
    </div>
  );
}
export default ConsignmentTable;
