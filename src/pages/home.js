import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2";
import LoadingButton from "@mui/lab/LoadingButton";
import useEffectOnce from "../hooks/useEffectOnce";
import useSearch from "../hooks/useSearch";
import PeopleCard from "../components/people-card";

import {
  selectPeople,
  fetchPeople,
  fetchNext,
  reset,
} from "../app/reducers/peopleSlice";

const Home = () => {
  const [search] = useSearch();
  const dispatch = useDispatch();
  const { ref, inView } = useInView();
  const { data, error, hasNextPage, nextPage, status } =
    useSelector(selectPeople);

  useEffectOnce(() => {
    dispatch(reset());
    dispatch(fetchPeople({ search }));
  }, [search]);

  useEffect(() => {
    if (!hasNextPage) return;
    if (inView) {
      dispatch(fetchNext(nextPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);

  return (
    <>
      {status === "error" && <p>`Error fetching data. Error:${error}`</p>}
      {status === "pending" && !data.length && <p>Fetching data...</p>}
      {(status === "fulfilled" || status === "pending") && (
        <div>
          <div>
            <Grid2
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data.map((person, i) => (
                <Grid2 xs={2} sm={4} md={4} key={i}>
                  <PeopleCard data={person} />
                </Grid2>
              ))}
              <div></div>
            </Grid2>
          </div>
          <div ref={ref}></div>
          {hasNextPage && (
            <div>
              <Grid2 columns={{ xs: 12, sm: 12, md: 12 }}>
                <Card>
                  <CardContent>
                    <LoadingButton
                      variant="contained"
                      disableElevation
                      size="large"
                      loading={hasNextPage}
                      loadingIndicator="Loading…"
                    >
                      <span>That's all folks!</span>
                    </LoadingButton>
                  </CardContent>
                </Card>
              </Grid2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
