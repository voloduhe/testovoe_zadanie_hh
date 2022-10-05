import { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import TasksContext from "../context/TasksContext";

type TaskType = 'normal' | 'deleted'

interface ITaskCardProps {
   type: TaskType
   title: string;
   text: string;
   id: string
}

const StyledCard = styled(Card)`
   box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
   border-radius: 12px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const TaskCard = ({type, title, text, id }: ITaskCardProps) => {
   const [isHovered, setIsHovered] = useState(false);
   const { tasks, setTasks } = useContext(TasksContext);

   const handleMouseEnter = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
   ) => {
      if (e.target) setIsHovered(true);
   };
   const handleMouseLeave = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
   ) => {
      if (e.target) setIsHovered(false);
   };

   const handleDeleteTask = () => {
      console.log(id)
      setTasks(tasks.map(task => task.id === id ? {...task, deleted: true}: {...task}))
   }

   const handleDeleteTskForever = () => {
      setTasks(tasks.filter(task => task.id !== id))
   }

   return (
      <StyledCard
         sx={{ width: 275 }}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <CardContent>
            {title && (
               <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
               >
                  {title}
               </Typography>
            )}
            <Typography variant="body2">{text}</Typography>
         </CardContent>
         <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton sx={{ opacity: isHovered ? 1 : 0 }} onClick={type === 'normal' ? handleDeleteTask : handleDeleteTskForever}>
               <DeleteOutlineOutlined />
            </IconButton>
         </CardActions>
      </StyledCard>
   );
};

export default TaskCard;
