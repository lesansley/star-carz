import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import VehicleDetails from "./vehicle-details";
import { client } from "../api/client";
import useEffectOnce from "../hooks/useEffectOnce";

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

const VehicleCard = React.forwardRef(({ queryUrlArray }, ref) => {
  const [vehicleArray, setVehicleArray] = React.useState([]);
  useEffectOnce(() => {
    async function fetchVehicles() {
      const result = await Promise.all(
        queryUrlArray.map(async (queryParam) => {
          const query = queryParam.substring(queryParam.search("/api") + 4);
          return await client(query);
        })
      );
      setVehicleArray(result);
    }
    fetchVehicles();
  }, [queryUrlArray]);
  return (
    <>
      <Box sx={boxStyle} ref={ref} tabIndex="-1">
        {vehicleArray.length === 0 ? (
          <CircularProgress />
        ) : (
          vehicleArray.map((vehicle, index) => (
            <VehicleDetails key={index} data={vehicle.data} />
          ))
        )}
      </Box>
    </>
  );
});
export default VehicleCard;
