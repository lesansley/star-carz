import React from "react";
import Layout from "./components/layout";
import Home from "./pages/home";
import { SearchContext } from "./context";
import "./App.css";

function SearchProvider(props) {
  const [search, setSearch] = React.useState("");
  const value = [search, setSearch];
  return <SearchContext.Provider value={value} {...props} />;
}

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Layout>
          <Home />
        </Layout>
      </SearchProvider>
    </div>
  );
}

export default App;
