import React from "react";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardElement from "./card-element";
import Modal from "@mui/material/Modal";
import VehicleCard from "./vehicle-card";
import { fetchVehicles } from "../api";

const testVehicles = [
  {
    name: "Imperial Speeder Bike",
    model: "74-Z speeder bike",
    manufacturer: "Aratech Repulsor Company",
    cost_in_credits: "8000",
    length: "3",
    max_atmosphering_speed: "360",
    crew: "1",
    passengers: "1",
    cargo_capacity: "4",
    consumables: "1 day",
    vehicle_class: "speeder",
    pilots: [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/5/",
    ],
    films: ["https://swapi.dev/api/films/3/"],
    created: "2014-12-18T11:20:04.625000Z",
    edited: "2014-12-20T21:30:21.693000Z",
    url: "https://swapi.dev/api/vehicles/30/",
  },
];

const PeopleCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [vehicles, setVehicles] = React.useState();
  const [arrayOfVehicleURLs, setArrayOfVehicleURLs] = React.useState();

  const persona = (({ name, height, mass, gender, edited, vehicles }) => ({
    name,
    height,
    mass,
    gender,
    edited,
    vehicles,
  }))(data);

  React.useState(() => {
    setArrayOfVehicleURLs(persona.vehicles);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnClick = (event) => {
    setOpen(true);
  };

  const fields = Object.keys(persona);
  const card = (
    <React.Fragment>
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
            <VehicleCard urls={arrayOfVehicleURLs} />
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
