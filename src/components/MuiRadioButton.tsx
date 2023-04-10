import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-expeirence-group-label">
          {" "}
          Years of Experience
        </FormLabel>
      </FormControl>
      <RadioGroup
        name="job-experience-group"
        aria-labelledby="job-expeirence-group-label"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          control={<Radio size="small" color="secondary" />}
          label="0-2"
          value="0-2"
        />
        <FormControlLabel
          control={<Radio size="small" color="secondary" />}
          label="2-4"
          value="2-4"
        />
        <FormControlLabel
          control={<Radio size="small" />}
          label="4-6"
          value="4-6"
        />
        <FormControlLabel
          control={<Radio size="small" />}
          label="6-6"
          value="6-6"
        />
        <FormControlLabel
          control={<Radio size="small" />}
          label="8+"
          value="8+"
        />
      </RadioGroup>
    </Box>
  );
};

export default MuiRadioButton;
