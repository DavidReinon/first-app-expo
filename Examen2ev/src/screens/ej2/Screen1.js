import React, { useContext, useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import ScreensContext from "./ScreensContext";
import { getData } from "../../services/Services";

const Screen1 = ({ navigation }) => {
    const urlApi = "https://api.deezer.com/search?q=";
    const { setData } = useContext(ScreensContext);
    const [text, setText] = useState("");

    const handleSearch = async () => {
        try {
            const result = await getData(urlApi + text);
            console.log(result);
            setData(result);
            navigation.navigate("Screen2");
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Ingrese término de búsqueda"
                value={text}
                onChangeText={(text) => setText(text)}
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                    padding: 8,
                }}
            />
            <Button title="Buscar" onPress={handleSearch} />
        </View>
    );
};

export default Screen1;
