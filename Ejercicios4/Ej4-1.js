import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
export default function App() {
    const [cuadrados, setCuadrados] = useState([
        {
            width: 100,
            height: 100,
            color: "blue",
        },
        {
            width: 250,
            height: 250,
            color: "red",
        },
    ]);
    return (
        <View style={styles.container}>
            {cuadrados.map((element, index) => (
                <View key={index.toString()} style={{ flexDirection: "row" }}>
                    <View
                        width={element.width}
                        height={element.height}
                        backgroundColor={element.color}
                    />
                </View>
            ))}
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
