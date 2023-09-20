import { View, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function App() {
    const [color, setColor] = useState("green");
    const [shape, setShape] = useState(200);
    const [shapeBackGroundColor, setShapeBackGroundColor] = useState("yellow");
    function handleOnPress() {
        setColor(color === "green" ? "yellow" : "green");
        setShape(shape === 200 ? 100 : 200);
        setShapeBackGroundColor(
            shapeBackGroundColor === "yellow" ? "green" : "yellow"
        );
    }
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <View
                style={[
                    styles.square,
                    { height: shape },
                    { backgroundColor: shapeBackGroundColor },
                ]}
            />
            <Button onPress={handleOnPress} title="Pulsame!" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    square: {
        size: "100",
        mt: "-2",
        marginTop: -6,
        width: 200,
        height: 200,
        backgroundColor: "yellow",
    },
});
