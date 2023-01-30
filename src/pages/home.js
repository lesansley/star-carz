import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { fetchPeople } from "../api";
import Grid2 from "@mui/material/Unstable_Grid2";

import PeopleCard from "../components/people-card";

const Home = () => {
  const [people, setPeople] = React.useState([]);
  const [queryParam, setQueryParam] = React.useState(["people"]);
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
          </Grid2>
          <div ref={ref}>
            {isFetching && !isFetchingNextPage
              ? "Background Updating..."
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
