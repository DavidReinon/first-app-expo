import React, { useState, useRef, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { takePicture } from "../services/Services";
import { Dimensions } from "react-native";
const screenHeight = Dimensions.get("screen").height - 150;
const screenWidth = Dimensions.get("screen").width;

export default function MobileCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [photos, setPhotos] = useState([]);
    const [screenPhoto, setScreenPhoto] = useState(false);
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

    const savePhotos = async () => {
        const picture = await takePicture(camera);
        const newArray = [...photos];
        newArray.push(picture);
        setPhotos(newArray);
    };

    return (
        <View style={styles.container}>
            {!screenPhoto ? (
                <View>
                    <Button
                        title="Fer Foto"
                        onPress={() => setScreenPhoto(true)}
                    ></Button>
                    {photos.map((imageUri, index) => (
                        <Image
                            key={index}
                            style={styles.images}
                            source={{ uri: imageUri }}
                            resizeMode="contain"
                        ></Image>
                    ))}
                </View>
            ) : (
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
                                    onPress={() => [
                                        savePhotos(),
                                        setScreenPhoto(false),
                                    ]}
                                    name="play-circle-outline"
                                    size={75}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    images: {
        height: 200,
        width: 200,
    },
    camera: {
        flex: 1,
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
