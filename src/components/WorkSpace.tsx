import { useContext } from "react";
import { Box } from "@mui/material";

import TasksContext from "../context/TasksContext";
import InputForm from "./InputForm";
import TaskCard from "./TaskCard";

import SearchContext from "../context/SearchContext";

const WorkSpace = () => {
   const { tasks } = useContext(TasksContext);
   const { searchValue } = useContext(SearchContext);

   return (
      <Box
         sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
         }}
      >
         <Box sx={{ width: "500px", marginBottom: "20px" }}>
            <InputForm />
         </Box>
         <Box
            sx={{
               width: "100%",
               display: "flex",
               flexWrap: "wrap",
               gap: "20px",
            }}
         >
            {tasks
               .filter(
                  (task) =>
                     task.text
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                     task.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
               )
               .map(
                  (task) =>
                     !task.deleted && (
                        <TaskCard
                           text={task.text}
                           title={task.title}
                           key={task.id}
                           id={task.id}
                           type="normal"
                        />
                     )
               )}
         </Box>
      </Box>
   );
};

export default WorkSpace;
