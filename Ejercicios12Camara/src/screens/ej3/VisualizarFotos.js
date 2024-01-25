import { ScrollView, Image, StyleSheet } from "react-native";
import React, { useContext } from "react";
import ScreensContext from "./ScreensContext";

const VisualizarFotos = () => {
    const { photos } = useContext(ScreensContext);
    return (
        <ScrollView>
            {photos.map((imageUri, index) => (
                <Image
                    key={index}
                    style={styles.images}
                    source={{ uri: imageUri }}
                    resizeMode="contain"
                ></Image>
            ))}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    images: {
        height: 450,
        width: 300,
    },
});

export default VisualizarFotos;
