import React from "react";
import { SearchContext } from "../context";

function useSearch() {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export default useSearch;
