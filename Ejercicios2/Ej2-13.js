import { TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function App() {
    const [changeSize, setChangeSize] = useState(200);
    const [changeColor, setChangeColor] = useState("yellow");

    const handleOnImage = (imageType) => {
        if (imageType === "increase") {
            setChangeSize((prevSize) => prevSize + 10);
            //setChangeSize(changeSize + 10);
            setChangeColor("green");
            return;
        }
        setChangeSize((prevSize) => prevSize - 10);
        //setChangeSize(changeSize - 10);
        setChangeColor("yellow");
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.square,
                    {
                        width: changeSize,
                        height: changeSize,
                        backgroundColor: changeColor,
                    },
                ]}
                onPress={() => handleOnImage("increase")}
            />
            <TouchableOpacity
                style={[
                    styles.square,
                    {
                        width: changeSize,
                        height: changeSize,
                        backgroundColor: changeColor,
                    },
                ]}
                onPress={() => handleOnImage("decrease")}
            />
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
    square: {
        size: "100",
        mt: "-2",
        marginTop: -6,
        width: 200,
        height: 200,
        backgroundColor: "yellow",
    },
});
