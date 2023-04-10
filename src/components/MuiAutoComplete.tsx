import { TextField, Autocomplete, Stack } from "@mui/material";
import React, { useState } from "react";
const skills = ["HTML", "CSS", "JS", "TS", "React"];
const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log({value});
  const handleChange = (event: any, newValue: string | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutoComplete;
