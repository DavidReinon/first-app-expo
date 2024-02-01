import React, { createContext, useState } from "react";

const ScreensContext = createContext(); //Lo que se importa por defecto y va en useContext

export const ScreensProvider = ({ children }) => {
    const [data, setData] = useState(null);
    return (
        <ScreensContext.Provider value={{ data, setData }}>
            {children}
        </ScreensContext.Provider>
    );
};
export default ScreensContext; //Cuidado, aqui importar ScreenContext y no el componente export const ScreenProvider
