import { createContext, useState } from "react";

const ScreensContext = createContext(); //Lo que se importa por defecto

export default ScreensContext; //Cuidado, aqui importar ScreenContext y no el componente export const ScreenProvider

export const ScreensProvider = ({ children }) => {
    //Se importa aparte, entre {}
    const [audio, setAudio] = useState(null);
    return (
        <ScreensContext.Provider value={{ audio, setAudio }}>
            {children}
        </ScreensContext.Provider>
    );
};
