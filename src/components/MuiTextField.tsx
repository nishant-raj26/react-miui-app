import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  const [viewer, setViewer] = useState(false);
  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input Required"
          required
          size="small"
          helperText="Enter ID here"
        />
        <TextField
          label="Password"
          type={viewer ? "text" : "password"}
          size="small"
          InputProps={{
            endAdornment: (
              <VisibilityIcon onClick={handleVisibility}>
                {" "}
                {viewer ? <VisibilityOffIcon /> : <VisibilityIcon />}{" "}
              </VisibilityIcon>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <CurrencyRupeeIcon />{" "}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          size="small"
          label="Password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not SHare Your Password"}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
