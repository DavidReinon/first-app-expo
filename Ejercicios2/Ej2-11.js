import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function App() {
    let predefinidoTexto = "Text";
    let diferenteTexto = "Diferente";
    const [newText1, setNewText1] = useState(predefinidoTexto);
    const [newText2, setNewText2] = useState(predefinidoTexto);
    const [newText3, setNewText3] = useState(predefinidoTexto);
    const [newText4, setNewText4] = useState(predefinidoTexto);
    const textos = {
        1: "Text1",
        2: "Text2",
        3: "Text3",
        4: "Text4",
    };
    const handleOnPress = (unicTextElement) => {
        switch (unicTextElement) {
            case textos[1]:
                setNewText1(
                    newText1 === predefinidoTexto
                        ? diferenteTexto
                        : predefinidoTexto
                );
                break;
            case textos[2]:
                setNewText2(
                    newText2 === predefinidoTexto
                        ? diferenteTexto
                        : predefinidoTexto
                );
                break;
            case textos[3]:
                setNewText3(
                    newText3 === predefinidoTexto
                        ? diferenteTexto
                        : predefinidoTexto
                );
                break;
            case textos[4]:
                setNewText4(
                    newText4 === predefinidoTexto
                        ? diferenteTexto
                        : predefinidoTexto
                );
                break;
            default:
                break;
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => handleOnPress("Text1")}>
                {newText1}
            </Text>
            <Text style={styles.text} onPress={() => handleOnPress("Text2")}>
                {newText2}
            </Text>
            <Text style={styles.text} onPress={() => handleOnPress("Text3")}>
                {newText3}
            </Text>
            <Text style={styles.text} onPress={() => handleOnPress("Text4")}>
                {newText4}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
        marginBottom: 20,
    },
});
