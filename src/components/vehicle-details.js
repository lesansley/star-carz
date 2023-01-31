import React from "react";
import CardContent from "@mui/material/CardContent";
import CardElement from "./card-element";

const VehicleDetails = ({ data }) => {
  console.log(data);
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
  const card = (
    <React.Fragment>
      <CardContent>
        {fields.map((field, index) => (
          <div key={index}>
            <CardElement field={field} value={vehicle[field]} />
          </div>
        ))}
      </CardContent>
    </React.Fragment>
  );
  return <div>{card}</div>;
};

export default VehicleDetails;
