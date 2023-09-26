import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
export default function App() {
    const [text, setText] = useState("");
    const handleOnPress = () => {
        if (typeof text === "string") return alert("Es texto");
        if (typeof text === "number") return alert("Es numero");
        if (text === "") return alert("No se ha escrito nada");
        return alert("No se sabe");
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta tu texto..."
                onChangeText={(newText) => setText(newText)}
                defaultValue={text}
            />
            <Button title="TIPO" onPress={() => handleOnPress()}>
                {" "}
            </Button>
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
