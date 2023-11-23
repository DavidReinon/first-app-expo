import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

const P2 = () => {
    const [inputText, setInputText] = useState("");
    const [utf16Text, setUtf16Text] = useState("");
    const [hexText, setHexText] = useState("");

    const convertFunction = () => {
        // Convertir a UTF-16
        const utf16Array = [];
        for (let i = 0; i < inputText.length; i++) {
            utf16Array.push(inputText.charCodeAt(i));
        }
        const utf16Result = utf16Array.join(" ");

        // Convertir a Hexadecimal
        const hexResult = utf16Array
            .map((charCode) => charCode.toString(16))
            .join(" ");

        setUtf16Text(utf16Result);
        setHexText(hexResult);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Put text"
                onChangeText={(text) => setInputText(text)}
            />
            <Button title="Convert" onPress={convertFunction} />
            <Text style={styles.resultText}>UTF-16: {utf16Text}</Text>
            <Text style={styles.resultText}>Hexadecimal: {hexText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        width: 300,
    },
    resultText: {
        marginTop: 10,
    },
});
export default P2;
