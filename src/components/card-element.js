import Typography from "@mui/material/Typography";
import { UNITS } from "../config";

const CardElement = ({ field, value, handleOnClick }) => {
  switch (field) {
    case "name":
      return (
        <Typography variant="h5" component="div">
          {value}
        </Typography>
      );
    case "vehicle_class":
      return (
        <Typography variant="body1">
          <strong>class</strong>: {value}
        </Typography>
      );
    case "edited":
      return null;
    case "vehicles":
      return null;
    default:
      return (
        <Typography variant="body1">
          <strong>{field}</strong>: {value} {UNITS[field] ? UNITS[field] : null}
        </Typography>
      );
  }
};

export default CardElement;
