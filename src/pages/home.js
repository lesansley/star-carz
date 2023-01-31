import React from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2";
import LoadingButton from "@mui/lab/LoadingButton";
import { fetchPeople } from "../api";
import useSearch from "../hooks/useSearch";
import PeopleCard from "../components/people-card";

const Home = () => {
  const [search] = useSearch();
  const queryParam = ["people", search];
  const { ref, inView } = useInView();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: queryParam,
    queryFn: fetchPeople,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  React.useEffect(() => {
    if (!hasNextPage) {
      return;
    }
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <>
      {status === "error" ? (
        <p>`Error fetching data. Error: ${error.message}`</p>
      ) : null}
      {status === "loading" ? <p>Fetching data...</p> : null}
      {status === "success" ? (
        <div>
          <div>
            <Grid2
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data.pages.map((page, i) => (
                <React.Fragment key={i}>
                  {page.response.map((person, i) => (
                    <Grid2 xs={2} sm={4} md={4} key={i}>
                      <PeopleCard data={person} />
                    </Grid2>
                  ))}
                </React.Fragment>
              ))}
              <div></div>
            </Grid2>
          </div>
          <div ref={ref}></div>
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
                    <span>No more to see</span>
                  </LoadingButton>
                </CardContent>
              </Card>
            </Grid2>
          </div>
          <div>{isFetching || isFetchingNextPage ? "Updating..." : null}</div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
