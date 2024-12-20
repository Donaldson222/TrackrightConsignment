import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; 
import ConsignmentButtons from "./Components/ConsignmentButtons/ConsignmentButtons";
import ConsignmentTable from "./Components/ConsignmentTable/ConsignmentTable"; 
import ConsignmentTable2 from "./Components/ConsignmentTable2/ConsignmentTable2"; 
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
