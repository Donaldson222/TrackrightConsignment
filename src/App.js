import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Import your Navbar component
import ConsignmentButtons from "./Components/ConsignmentButtons/ConsignmentButtons"; // Import your buttons component
import ConsignmentTable from "./Components/ConsignmentTable/ConsignmentTable"; // Import your main consignment table
import ConsignmentTable2 from "./Components/ConsignmentTable2/ConsignmentTable2"; // Import your second consignment table
import "./Consignment-style-sheet.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <h1>Consignments</h1>
        <div className="button-table">
          <ConsignmentButtons /> 
          <Routes>
            <Route path="/consignment-table" element={<ConsignmentTable />} />{" "}
          
            <Route
              path="/consignment-table-2"
              element={<ConsignmentTable2 />}
            />{" "}
            
            <Route path="/" element={<ConsignmentTable />} />{" "}
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
