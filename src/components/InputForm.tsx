import { TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ClickAwayListener } from "@mui/base";
import { useState, useContext } from "react";
import TasksContext from "../context/TasksContext";
import { v4 } from "uuid";

const InputBlock = styled(Box)`
   display: flex;
   flex-direction: column;
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.4);
   padding: 20px 15px;
   border-radius: 12px;
`;

const InputForm = () => {
   const [isInputOpen, setIsInputOpen] = useState(false);

   const [taskText, setTaskText] = useState("");
   const [taskTitle, setTaskTitle] = useState("");
   const { tasks, setTasks } = useContext(TasksContext);

   const handleTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaskText(e.target.value);
   };

   const handleTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === 20) {
         return;
      }
      setTaskTitle(e.target.value);
   };

   const handleClickAway = () => {
      addTask();
      setTaskText("");
      setTaskTitle("");
      setIsInputOpen(false);
   };

   function addTask() {
      if (taskText || taskTitle) {
         setTasks([
            {
               id: v4(),
               title: taskTitle,
               text: taskText,
               deleted: false,
            },
            ...tasks,
         ]);
      }
   }

   return (
      <ClickAwayListener onClickAway={handleClickAway}>
         <InputBlock style={{}}>
            {isInputOpen && (
               <TextField
                  variant="standard"
                  placeholder="Заголовок"
                  style={{ marginBottom: "20px" }}
                  InputProps={{ disableUnderline: true }}
                  onChange={handleTaskTitle}
                  value={taskTitle}
               />
            )}
            <TextField
               variant="standard"
               placeholder="Задача"
               multiline
               InputProps={{ disableUnderline: true }}
               onClick={() => setIsInputOpen(true)}
               onChange={handleTaskText}
               value={taskText}
            />
         </InputBlock>
      </ClickAwayListener>
   );
};

export default InputForm;
