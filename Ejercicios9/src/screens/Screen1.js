import React, { useState } from "react";

export default Screen1 = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const api = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${hola}`
            );
            if (api.ok) {
                const result = await api.json();
                console.log(result);
                setData(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    
};
