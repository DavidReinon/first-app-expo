import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
export default function App() {
    const [image1, setImage1] = useState({
        image: require("./assets/icon.png"),
        text: "1",
    });
    const [image2, setImage2] = useState({
        image: require("./assets/icon.png"),
        text: "2",
    });
    const handleOnImage = (imageType) => {
        if (imageType === "image1") {
            if (image1.image === require("./assets/icon.png")) {
                return setImage1({
                    image: require("./assets/favicon.png"),
                    text: "1Cambiado",
                });
            }
            return setImage1({
                image: require("./assets/icon.png"),
                text: "1",
            });
        }

        if (image2.image === require("./assets/icon.png")) {
            return setImage2({
                image: require("./assets/favicon.png"),
                text: "2Cambiado",
            });
        }
        return setImage2({
            image: require("./assets/icon.png"),
            text: "2",
        });
    };
    return (
        <View style={styles.containerRow}>
            <TouchableOpacity onPress={() => handleOnImage("image1")}>
                <Image style={styles.image} source={image1.image} />
                <Text>{image1.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOnImage("image2")}>
                <Image style={styles.image} source={image2.image} />
                <Text>{image2.text}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    containerRow: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 100,
    },
});
