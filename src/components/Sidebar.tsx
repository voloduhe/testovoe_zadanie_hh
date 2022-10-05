import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { LightbulbOutlined, DeleteOutlineOutlined} from '@mui/icons-material';
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

// components
import NavigationList from "./NavigationList";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
   width: drawerWidth,
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: "hidden",
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
   },
});

const Drawer = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: "nowrap",
   boxSizing: "border-box",
   ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
   }),
   ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
   }),
}));

const listButtonsData = [
   {id: 0, text: 'Заметки', icon: <LightbulbOutlined />},
   {id: 1, text: 'Корзина', icon: <DeleteOutlineOutlined />},
]

interface ISidebarProps {
   open: boolean
}

export default function Sidebar({open}: ISidebarProps) {
   return (
         <Drawer
            variant="permanent"
            open={open}
            sx={{
               width: drawerWidth,
               flexShrink: 0,
               [`& .MuiDrawer-paper`]: {
                  width: open ? drawerWidth : 66,
                  boxSizing: "border-box",
               },
            }}
         >
            <Toolbar />
            <Box sx={{ overflow: "hidden" }}>
               <NavigationList open={open} listButtonsData={listButtonsData} />
            </Box>
         </Drawer>
   );
}
