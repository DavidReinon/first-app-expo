import { View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import playLocalSound, {
    saveSound,
    playSavedSound,
    resumeAudio,
    pauseAudio,
    stopAudio,
} from "../services/AudioServices";

//Ejercicio 1: bloque actividades audio 2
const Ejercicio4 = () => {
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        const loadAudio = async () => {
            const { sound } = await saveSound(
                require("../assets/audio/sunflower.mp3")
            );
            setAudio(sound);
        };
        loadAudio();

    }, []);

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button title="PLAY" onPress={() => playSavedSound(audio)}></Button>
            <Button title="Pause" onPress={() => pauseAudio(audio)}></Button>
            <Button title="Resume" onPress={() => resumeAudio(audio)}></Button>
            <Button title="Stop" onPress={() => stopAudio(audio)}></Button>
        </View>
    );
};

export default Ejercicio4;
