import {useContext} from "react";
import PageContext from "../context/PageContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";



interface INavigationListProps {
   open: boolean
   listButtonsData: Array<{id: number, text: string, icon: JSX.Element}>
}

const NavigationList = ({open, listButtonsData}: INavigationListProps) => {
   const { setPage } = useContext(PageContext)
   
   return (
      <List>
         {listButtonsData.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }} onClick={() => setPage(item.id)}>
               <ListItemButton
                  sx={{
                     minHeight: 48,
                     justifyContent: open ? "initial" : "center",
                     px: 2.5,
                  }}
               >
                  <ListItemIcon
                     sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                     }}
                  >
                     {item.icon}
                  </ListItemIcon>
                  <ListItemText
                     primary={item.text}
                     sx={{ opacity: open ? 1 : 0 }}
                  />
               </ListItemButton>
            </ListItem>
         ))}
      </List>
   );
};


export default NavigationList