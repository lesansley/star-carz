import React from "react";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import VehicleDetails from "./vehicle-details";
import { fetchVehicles } from "../api";

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

const VehicleCard = React.forwardRef(({ urls }, ref) => {
  const vehicleURL = urls[0];
  const { status, data, error } = useQuery({
    queryKey: ["vehicle", vehicleURL],
    queryFn: fetchVehicles,
  });
  return (
    <>
      {status === "error" ? (
        <p>`Error fetching data. Error: ${error.message}`</p>
      ) : null}
      {status === "loading" ? <p>Fetching data...</p> : null}
      {status === "success" ? (
        <Box sx={boxStyle} ref={ref} tabIndex="-1">
          <VehicleDetails data={data.response} />
        </Box>
      ) : null}
    </>
  );
});
export default VehicleCard;
