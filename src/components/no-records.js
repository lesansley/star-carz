import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2";

const NoRecords = () => {
  return (
    <Grid2 columns={{ xs: 12, sm: 12, md: 12 }}>
      <Card>
        <CardContent>
          <p>
            Ooops. There do not seem to be any people matching your search.
            Please try again.
          </p>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default NoRecords;
