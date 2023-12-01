import { createContext, useState } from "react";

const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {
    const [data, setData] = useState(null);
    return (
        <ScreensContext.Provider value={{ data, setData }}>
            {children}
        </ScreensContext.Provider>
    );
};
export default ScreensContext; //Cuidado, importar ScreenContext y no el componente export const ScreenProvider
