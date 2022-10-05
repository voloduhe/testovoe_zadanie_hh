import { createContext } from "react";

export type Task = {
   id: string;
   title: string;
   text: string;
   deleted: boolean;
};

interface IGlobalState {
   tasks: Task[];
   setTasks: (c: Task[]) => void;
}

const TasksContext = createContext<IGlobalState>({
   tasks: [],
   setTasks: () => {},
});

export default TasksContext;
