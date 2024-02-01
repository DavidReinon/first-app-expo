import { View, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ScreensContext from "./ScreensContext";
import { Audio } from "expo-av";

const Screen2 = () => {
    const { audioList } = useContext(ScreensContext);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        playRecording(audioList[index]);
    }, [index]);

    const playRecording = async (audio) => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: audio } // Cambia para usar el enlace URI directamente
            );
            await sound.playAsync();
        } catch (error) {
            console.error("No se pudo reproducir audio");
        }
    };
    const handleBack = () => {
        setIndex((prev) => (prev === 0 ? audioList.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === audioList.length - 1 ? 0 : prev + 1));
    };
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button title="Anterior" onPress={handleBack} />
            <Button title="Siguiente" onPress={handleNext} />
        </View>
    );
};

export default Screen2;
