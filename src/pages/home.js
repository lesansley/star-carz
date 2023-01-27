import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPeople } from "../api";

const Home = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["people"], fetchPeople, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const loadMoreRef = React.useRef();

  React.useEffect(() => {
    if (isFetching || isFetchingNextPage) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && fetchNextPage()),
      {
        root: null,
        margin: "0px",
        treshold: 1.0,
      }
    );
    const el = loadMoreRef && loadMoreRef.current;

    if (!el) {
      return;
    }

    observer.observe(el);
  }, [fetchNextPage, isFetching, isFetchingNextPage]);
  return (
    <>
      {status === "error" ? (
        <p>`Error fetching data. Error: ${error.message}`</p>
      ) : null}
      {status === "loading" ? <p>Fetching data...</p> : null}
      {status === "success" ? (
        <div>
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.response.map((person, i) => {
                const isLastRecord = page.response.length === i + 1;
                if (isLastRecord) {
                  return (
                    <p key={i} ref={loadMoreRef}>
                      {person.name}
                    </p>
                  );
                }
                return <p key={i}>{person.name}</p>;
              })}
            </React.Fragment>
          ))}
          <div>{hasNextPage ? "Fetching..." : null}</div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
