import { View, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";

export default function App() {
    const initialSize = 200;
    const [shapeSizeIncrease, setshapeSizeIncrease] = useState(initialSize);
    const [shapeBackGroundColor, setShapeBackGroundColor] = useState("yellow");
    const screenWidth = Dimensions.get("window").width;
    function handleOnPress() {
        setshapeSizeIncrease(
            shapeSizeIncrease < screenWidth
                ? shapeSizeIncrease + 50
                : initialSize
        );
        setShapeBackGroundColor(
            shapeBackGroundColor === "yellow" ? "green" : "yellow"
        );
    }

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.square,
                    { height: shapeSizeIncrease },
                    { width: shapeSizeIncrease },
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
