import React, { createContext, useState } from "react";

const ScreensContext = createContext(); //Lo que se importa por defecto y va en useContext

export const ScreensProvider = ({ children }) => {
    //Se importa aparte, entre {}
    const [uriPhotos, setUriPhotos] = useState([]);
    return (
        <ScreensContext.Provider value={{ uriPhotos, setUriPhotos }}>
            {children}
        </ScreensContext.Provider>
    );
};
export default ScreensContext;
