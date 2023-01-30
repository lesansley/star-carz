import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PeopleCardElement from "./people-card-element";
import Modal from "@mui/material/Modal";
import VehicleCard from "./vehicle-card";

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

  const handleClose = () => setOpen(false);
  const handleOnClick = (event) => {
    setOpen(true);
  };

  const fields = Object.keys(persona);
  const card = (
    <React.Fragment>
      <CardContent>
        {fields.map((field, index) => (
          <div key={index}>
            <PeopleCardElement field={field} value={persona[field]} />
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
            <VehicleCard vehicles={persona.vehicles} />
          </Modal>
          <CardActions sx={{ display: "block" }}>
            <Button size="large" onClick={handleOnClick} variant="contained">
              Vehicles
            </Button>
          </CardActions>
        </>
      ) : null}
    </React.Fragment>
  );
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
export default PeopleCard;
