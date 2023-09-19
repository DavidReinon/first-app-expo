import { View, Button, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function App() {
    const [color, setColor] = useState("green");
    const [text, setText] = useState("My Title");

    function handleOnPress() {
        setColor(color === "yellow" ? "green" : "yellow");
        setText(text === "My Title" ? "My New Tytle" : "My Title");
    }
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.title}>{text}</Text>
            <Image
                style={styles.image}
                source={require("./assets/favicon.png")}
            />
            <Button onPress={handleOnPress} title="Pulsame!" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: "underline",
    },
    image: {
        width: 200,
        height: 200,
    },
});
