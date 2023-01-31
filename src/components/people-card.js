import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardElement from "./card-element";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import VehicleCard from "./vehicle-card";

import { dateTimeFromISODate } from "../helpers";

const PeopleCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const persona = (({ name, height, mass, gender, edited, vehicles }) => ({
    name,
    height,
    mass,
    gender,
    edited,
    vehicles,
  }))(data);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnClick = (event) => {
    setOpen(true);
  };

  const fields = Object.keys(persona);
  const card = (
    <>
      <CardContent>
        {fields.map((field, index) => (
          <div key={index}>
            <CardElement field={field} value={persona[field]} />
          </div>
        ))}
      </CardContent>
      {persona.vehicles.length > 0 ? (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Vehicles"
            aria-describedby="Description of vehicles"
          >
            <VehicleCard queryUrlArray={persona.vehicles} />
          </Modal>
          <CardActions sx={{ display: "block" }}>
            <Button size="large" onClick={handleOnClick} variant="contained">
              {persona.vehicles.length === 1 ? `Vehicle` : `Vehicles`}
            </Button>
          </CardActions>
        </>
      ) : null}
      <Typography variant="caption" display="block" gutterBottom>
        Last edited on <em>{dateTimeFromISODate(persona.edited)}</em>
      </Typography>
    </>
  );
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
export default PeopleCard;
