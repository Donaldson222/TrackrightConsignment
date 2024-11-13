import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md"; /* <MdDeleteOutline /> */
import { FaEdit } from "react-icons/fa"; /* <FaEdit /> */
import { IoCopyOutline } from "react-icons/io5"; /* <IoCopyOutline />  */
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

function ConsignmentTable2() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
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
            {data.map((val, index, row) => (
              <TableRow
                key={index}
                className="table-row-hover"
                hover
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ position: "relative" }}
              >
                <TableCell>
                  {val.consigncode}{" "}
                  <div
                    style={{
                      fontSize: "0.8em",
                      color: val.priority === "High" ? "red" : "gray",
                    }}
                  >
                    • {val.priority}
                  </div>
                </TableCell>
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
                  >
                    {val.transporter}
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
                    <Button id="delete-button" style={{ minWidth: "auto" }}>
                      <MdDeleteOutline />
                    </Button>
                    <Button id="edit-button" style={{ minWidth: "auto" }}>
                      <FaEdit />
                    </Button>
                    <Button id="copy-button" style={{ minWidth: "auto" }}>
                      <IoCopyOutline />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
}

export default ConsignmentTable2;
