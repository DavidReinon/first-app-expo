import React, { useState, useRef, useEffect, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Dimensions,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import ScreensContext from "./ScreensContext";

const screenHeight = Dimensions.get("screen").height - 150;
const screenWidth = Dimensions.get("screen").width;

const FerFoto = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const { uriPhotos, setUriPhotos } = useContext(ScreensContext);
    const camera = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const takePicture = async () => {
        const options = { quality: 0.5, base64: true };
        const img = await camera.current.takePictureAsync(options);
        return img.uri;
    };

    const savePhotos = async () => {
        const picture = await takePicture();
        const newArray = [...uriPhotos];
        newArray.push(picture);
        setUriPhotos(newArray);
    };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === CameraType.back
                                    ? CameraType.front
                                    : CameraType.back
                            );
                        }}
                    >
                        <Text style={styles.text}> Flip </Text>
                        <MaterialIcons
                            onPress={() => [savePhotos()]}
                            name="play-circle-outline"
                            size={75}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
            </Camera>
            <View
                style={{
                    flex: 0.2,
                    alignSelf: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    title="Visualizar Fotos"
                    onPress={() => props.navigation.navigate("VisualizarFotos")}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    images: {
        height: screenHeight,
        width: screenWidth,
    },
    camera: {
        flex: 0.8,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        margin: 20,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "white",
    },
});
export default FerFoto;
