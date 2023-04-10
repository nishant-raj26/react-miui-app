import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

const MuiButton = () => {
  const [formats, setFormats] = useState<string |null >(null);
  console.log({
    formats,
  });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string|null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction={"row"}>
          <Button variant="text" color="secondary">
            {" "}
            Click Me{" "}
          </Button>
          <Button variant="contained" color="warning">
            {" "}
            Click Me{" "}
          </Button>
          <Button variant="outlined" color="success">
            {" "}
            Click Me{" "}
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" color="primary">
            {" "}
            primary{" "}
          </Button>
          <Button variant="contained" color="secondary">
            {" "}
            secondary{" "}
          </Button>
          <Button variant="contained" color="error">
            {" "}
            error{" "}
          </Button>
          <Button variant="contained" color="warning">
            {" "}
            warning{" "}
          </Button>
          <Button variant="contained" color="info">
            {" "}
            info
          </Button>
          <Button variant="contained" color="success">
            {" "}
            success{" "}
          </Button>
        </Stack>

        <Stack spacing={2} display={"block"} direction={"row"}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Clicked")}
          >
            {" "}
            Send{" "}
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
            aria-label="alignment button Group"
          >
            <Button onClick={() => alert("Left")}>Left</Button>
            <Button onClick={() => alert("Center")}>Center</Button>
            <Button onClick={() => alert("Right")}>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text formatting"
            value={formats}
            onChange={handleFormatChange}
            size="small"
            color="success"
            orientation="vertical"
          >
            <ToggleButton value="bold" aria-label="bold">
              {" "}
              <FormatBoldIcon />{" "}
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              {" "}
              <FormatItalicIcon />{" "}
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              {" "}
              <FormatUnderlinedIcon />{" "}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
