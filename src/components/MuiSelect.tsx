import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log({ country });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="500px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your Country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="GR">Germany</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
