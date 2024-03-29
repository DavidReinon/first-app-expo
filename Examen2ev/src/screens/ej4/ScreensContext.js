import React, { createContext, useState } from "react";

const ScreensContext = createContext(); //Lo que se importa por defecto y va en useContext

export const ScreensProvider = ({ children }) => {
    //Se importa aparte, entre {}
    const [audioList, setAudioList] = useState([]);
    return (
        <ScreensContext.Provider value={{ audioList, setAudioList }}>
            {children}
        </ScreensContext.Provider>
    );
};
export default ScreensContext; //Cuidado, aqui importar ScreenContext y no el componente export const ScreenProvider
