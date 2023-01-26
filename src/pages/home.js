import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPeople } from "../api";

const Home = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["people"],
    queryFn: getPeople,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const nextUrl = lastPage.next;
        const nextParam = nextUrl.substr(nextUrl.indexOf("=") + 1);
        return nextParam;
      }
      return undefined;
    },
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;
  return (
    <>
      {data.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map((person, i) => (
            <p key={i}>{person.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Home;
