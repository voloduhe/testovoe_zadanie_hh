import { useContext } from "react";
import { Box, Typography } from "@mui/material";

import TasksContext from "../context/TasksContext";
import TaskCard from "./TaskCard";
import SearchContext from "../context/SearchContext";

const DeletedTasksView = () => {
   const { tasks } = useContext(TasksContext);

   const { searchValue } = useContext(SearchContext)

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
         <Typography
            variant="h6"
            noWrap
            component="div"
            color="rgba(0, 0, 0, 0.87)"
            style={{ marginBottom: "20px" }}
         >
            {tasks.some((task) => task.deleted)
               ? "Удаленые задачи"
               : "Удаленых задач нет"}
         </Typography>
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
                     task.deleted && (
                        <TaskCard
                           text={task.text}
                           title={task.title}
                           key={task.id}
                           id={task.id}
                           type="deleted"
                        />
                     )
               )}
         </Box>
      </Box>
   );
};

export default DeletedTasksView;
