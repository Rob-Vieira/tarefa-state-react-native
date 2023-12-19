import { useContext, createContext, useState } from "react";

const ContadorContext = createContext();

export const ContadorProvider = ({ children }) => {
    const [contadorData, setContadorData] =  useState(0);

    return <ContadorContext.Provider value={{contadorData, setContadorData}} >{children}</ContadorContext.Provider>
}

export const useContadorContext = () => useContext(ContadorContext);