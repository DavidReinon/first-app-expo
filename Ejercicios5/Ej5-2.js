import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function App() {
    const [text, setText] = useState("");
    const [myArray, setMyArray] = useState([]);

    const handleOnPress = () => {
        const numero = parseFloat(text);
        if (text === "") return alert("No se ha escrito nada");
        if (isNaN(numero)) return alert("Se ha escrito texto");
        let newArray = [...myArray];
        newArray.push(text);
        setMyArray(newArray);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta tu texto..."
                onChangeText={(newText) => setText(newText)}
                defaultValue=""
            />
            {myArray.map((element, index) => (
                <Text key={index.toString()}>{element}</Text>
            ))}
            <Button title="Pulsa" onPress={() => handleOnPress()} />
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
