import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const VehicleCard = React.forwardRef(({ vehicles }, ref) => {
  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={boxStyle} ref={ref} tabIndex="-1">
      {vehicles.map((type, index) => {
        return (
          <CardContent key={index}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Name:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Model:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Manufacturer:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Vehicle Class:
            </Typography>
          </CardContent>
        );
      })}
    </Box>
  );
});
export default VehicleCard;
