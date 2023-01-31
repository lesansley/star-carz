import React from "react";
import CardContent from "@mui/material/CardContent";
import CardElement from "./card-element";

const VehicleDetails = ({ data }) => {
  const vehicle = (({
    name,
    model,
    manufacturer,
    vehicle_class,
    vehicles,
  }) => ({
    name,
    model,
    manufacturer,
    vehicle_class,
  }))(data);

  const fields = Object.keys(vehicle);

  return (
    <div>
      <>
        <CardContent>
          {fields.map((field, index) => (
            <div key={index}>
              <CardElement field={field} value={vehicle[field]} />
            </div>
          ))}
        </CardContent>
      </>
    </div>
  );
};

export default VehicleDetails;
