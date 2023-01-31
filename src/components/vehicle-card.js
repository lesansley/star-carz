import React from "react";
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

const VehicleCard = React.forwardRef(({ queryUrlArray }, ref) => {
  const [vehicleArray, setVehicleArray] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await Promise.all(
        queryUrlArray.map(async (queryParam) => {
          return await fetchVehicles({ queryKey: ["vehicles", queryParam] });
        })
      );
      setVehicleArray(result);
    }
    fetchData();
  }, [queryUrlArray]);

  return (
    <>
      {vehicleArray.length === 0 ? null : (
        <Box sx={boxStyle} ref={ref} tabIndex="-1">
          {vehicleArray.map((vehicle, index) => (
            <VehicleDetails key={index} data={vehicle} />
          ))}
        </Box>
      )}
    </>
  );
});
export default VehicleCard;
