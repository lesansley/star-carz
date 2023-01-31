import Typography from "@mui/material/Typography";
import { dateTimeFromISODate } from "../helpers";
import { UNITS } from "../config";

const CardElement = ({ field, value, handleOnClick }) => {
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
    case "vehicle_class":
      return <Typography variant="body2">class: {value}</Typography>;
    default:
      return (
        <Typography variant="body2">
          {field}: {value} {UNITS[field] ? UNITS[field] : null}
        </Typography>
      );
  }
};

export default CardElement;
