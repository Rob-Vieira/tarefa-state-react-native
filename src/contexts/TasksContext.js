import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [globalTasksData, setGlobalTasksData] = useState([]);

    const contextValue = { globalTasksData, setGlobalTasksData };

    return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>;
}

export const useTaskContext = () => useContext(TasksContext);