import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import useSearch from "../hooks/useSearch";
import { useQueryClient } from "@tanstack/react-query";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = () => {
  const [, setSearch] = useSearch();
  const searchRef = React.useRef();
  const queryClient = useQueryClient();

  const handleOnClick = (event) => {
    queryClient.cancelQueries({ queryKey: ["people"] });
    setSearch(() => searchRef.current.children[0].value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav">
        <Toolbar sx={{ alignItems: "left" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Starz 'n Carz
          </Typography>
          <Search sx={{ alignItems: "left" }}>
            <StyledInputBase
              ref={searchRef}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleOnClick();
                }
              }}
            />
            <Button onClick={handleOnClick}>
              <SearchIconWrapper>
                <SearchIcon sx={{ fill: "white" }} />
              </SearchIconWrapper>
            </Button>
          </Search>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default SearchBar;
