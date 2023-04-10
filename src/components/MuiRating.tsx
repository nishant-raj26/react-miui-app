import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newRating: number | null
  ) => {
    setRating(newRating);
  };
  console.log({ rating });
  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Stack>
  );
};

export default MuiRating;
