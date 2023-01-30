import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PeopleCardElement from "./people-card-element";

const PeopleCard = ({ data }) => {
  const persona = (({ name, height, mass, gender, edited, vehicles }) => ({
    name,
    height,
    mass,
    gender,
    edited,
    vehicles,
  }))(data);

  const handleOnClick = (event) => {
    event.preventDefault();
    console.log("click");
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
      <CardActions sx={{ display: "block" }}>
        <Button size="large" onClick={handleOnClick} variant="contained">
          Vehicles
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
export default PeopleCard;
