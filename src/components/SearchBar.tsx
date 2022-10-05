import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Search = styled("div")`
   position: relative;
   border-radius: 8px;
   background: #f1f3f4;
   width: 500px;
`;

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)`
   padding: 2px;
   padding-left: 3.2em;
   width: 100%;
`;

interface ISearchBarProps {
   onInput: (c: string) => void;
}

const SearchBar = ({ onInput }: ISearchBarProps) => {
   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      onInput(e.target.value);
   };

   return (
      <Search>
         <SearchIconWrapper>
            <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleInput}
         />
      </Search>
   );
};

export default SearchBar;
