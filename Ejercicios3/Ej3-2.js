import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function App() {
    const [text, setText] = useState("");
    const [miles, setMiles] = useState("");

    const handleOnPress = () => {
        const numero = parseFloat(text);
        if (text === "") return alert("No se ha escrito nada");
        if (!isNaN(numero)) return setMiles(numero / 1.6 + " millas");
        return alert("No se puede convertir a número");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta tu texto..."
                onChangeText={(newText) => setText(newText)}
                defaultValue="0"
            />
            <Text>{miles}</Text>
            <Button title="Conversor" onPress={() => handleOnPress()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
