import { View, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function App() {
    const [shapeSizeReduce, setShapeSizeReduce] = useState(200);
    const [shapeBackGroundColor, setShapeBackGroundColor] = useState("yellow");
    function handleOnPress() {
        setShapeSizeReduce(shapeSizeReduce - 20);
        setShapeBackGroundColor(
            shapeBackGroundColor === "yellow" ? "green" : "yellow"
        );
    }
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.square,
                    { height: shapeSizeReduce },
                    { width: shapeSizeReduce },
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
        backgroundColor: "black",
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
