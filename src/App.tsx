import "./App.sass";

import { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import PageContext from "./context/PageContext";

// components
import HeaderBar from "./components/HeaderBar";
import Sidebar from "./components/Sidebar";
import WorkSpace from "./components/WorkSpace";
import DeletedTasksView from "./components/DeletedTasksView";
import TasksContext from "./context/TasksContext";

function App() {
   const [open, setOpen] = useState(false);
   const { page } = useContext(PageContext);
   const { tasks } = useContext(TasksContext);

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

   const handleDrawer = () => {
      setOpen((prev) => !prev);
   };

   return (
      <div className="App">
         <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
            <HeaderBar handleDrawer={handleDrawer} />
            <Sidebar open={open} />
            <Box component="main" sx={{ height: "100vh", width: "100%", p: 8 }}>
               {page === 0 && <WorkSpace />}
               {page === 1 && <DeletedTasksView />}
            </Box>
         </Box>
      </div>
   );
}

export default App;
