import React from "react";
import { MuiTypography } from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutoComplete from "./components/MuiAutoComplete";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MuiTypography />} />
          <Route path="/button" element={<MuiButton />} />
          <Route path="/text" element={<MuiTextField />} />
          <Route path="/select" element={<MuiSelect />} />
          <Route path="/radio" element={<MuiRadioButton />} />
          <Route path="/check" element={<MuiCheckBox />} />
          <Route path="/switch" element={<MuiSwitch />} />
          <Route path="/rating" element={<MuiRating />} />
          <Route path="/auto" element={<MuiAutoComplete />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
