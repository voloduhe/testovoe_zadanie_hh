import { Toolbar, AppBar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import keepImg from "../assets/keep_icon.png";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import SearchContext from "../context/SearchContext";

interface IHeaderBarProps {
   handleDrawer: () => void;
}

const HeaderBar = ({ handleDrawer }: IHeaderBarProps) => {
   const { setSearchValue } = useContext(SearchContext);

   const handleSearch = (value: string) => {
      setSearchValue(value);
   };

   return (
      <AppBar
         position="fixed"
         sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: "#FFFFFF",
            color: "rgba(0, 0, 0, 0.54)",
            borderBottom: "1px solid rgba(0, 0, 0, .12)",
            boxShadow: "none",
         }}
      >
         <Toolbar style={{ position: "relative" }}>
            <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={handleDrawer}
               edge="start"
               sx={{
                  marginRight: 2,
               }}
            >
               <MenuIcon />
            </IconButton>
            <img
               src={keepImg}
               alt="Testovoe Keep"
               style={{ height: "40px", marginRight: "10px" }}
            />
            <Typography
               variant="h6"
               noWrap
               component="div"
               color="rgba(0, 0, 0, 0.87)"
            >
               Testovoe Keep
            </Typography>
            <Box
               style={{
                  position: "absolute",
                  left: "calc(50% + 30px)",
                  transform: "translateX(calc(-50%))",
               }}
            >
               <SearchBar onInput={handleSearch} />
            </Box>
         </Toolbar>
      </AppBar>
   );
};

export default HeaderBar;
