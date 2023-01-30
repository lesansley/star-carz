import Typography from "@mui/material/Typography";
import { dateTimeFromISODate } from "../helpers";

const PeopleCardElement = ({ field, value, handleOnClick }) => {
  switch (field) {
    case "name":
      return (
        <Typography variant="h5" component="div">
          {value}
        </Typography>
      );
    case "edited":
      return (
        <Typography variant="body2">
          {field}: {dateTimeFromISODate(value)}
        </Typography>
      );
    case "vehicles":
      return null;
    default:
      return (
        <Typography variant="body2">
          {field}: {value}
        </Typography>
      );
  }
};

export default PeopleCardElement;
