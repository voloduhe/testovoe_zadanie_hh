import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";
import TasksContext, { Task } from "./context/TasksContext";
import PageContext from "./context/PageContext";
import SearchContext from "./context/SearchContext";

const Main = () => {
   const [tasks, setTasks] = useState<Task[]>(
      JSON.parse(localStorage.getItem("tasks") || "[]")
   );
   const [page, setPage] = useState(0);
   const [searchValue, setSearchValue] = useState("");

   return (
      <React.StrictMode>
         <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <PageContext.Provider value={{ page, setPage }}>
               <TasksContext.Provider value={{ tasks, setTasks }}>
                  <App />
               </TasksContext.Provider>
            </PageContext.Provider>
         </SearchContext.Provider>
      </React.StrictMode>
   );
};

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

root.render(<Main />);
