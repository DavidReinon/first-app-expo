import { View, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";

export default function App() {
    const initialSize = 200;
    const [shapeSizeChange, setshapeSizeChange] = useState(initialSize);
    const [shapeBackGroundColor, setShapeBackGroundColor] = useState("yellow");
    const screenWidth = Dimensions.get("window").width;
    const [isIncreasing, setIsIncreasing] = useState(true);

    function handleOnPress() {
        setShapeBackGroundColor(
            shapeBackGroundColor === "yellow" ? "green" : "yellow"
        );

        if (isIncreasing) {
            if (shapeSizeChange < screenWidth) {
                return setshapeSizeChange(shapeSizeChange + 50);
            }
            return setIsIncreasing(false);
        }
        if (shapeSizeChange > initialSize) {
            return setshapeSizeChange(shapeSizeChange - 50);
        }
        return setIsIncreasing(true);
    }

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.square,
                    { height: shapeSizeChange },
                    { width: shapeSizeChange },
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
        marginTop: -6,
        backgroundColor: "yellow",
    },
});
