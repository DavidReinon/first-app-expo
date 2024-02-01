import { View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import {
    saveSound,
    playSavedSound,
    resumeAudio,
    pauseAudio,
    stopAudio,
} from "../services/AudioServices";
import { SelectList } from "react-native-dropdown-select-list";

//Ejercicio 4 (Modificado sin navegación): bloque actividades audio 2
const Ejercicio7 = () => {
    const [audio, setAudio] = useState(null);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const rutaAudio = "../assets/audio/";
    const [audioList, setAudioList] = useState([
        require(rutaAudio + "Cristiano_Siuu.m4a"),
        require(rutaAudio + "sn3.wav"),
        require(rutaAudio + "sunflower.mp3"),
    ]);

    useEffect(() => {
        const loadAudio = async () => {
            try {
                if (selectedAudio) {
                    const { sound } = await saveSound(selectedAudio);
                    setAudio(sound);
                }
            } catch (error) {
                console.error("Error loading audio:", error);
            }
        };
        loadAudio();
    }, [selectedAudio]);

    return (
        <View style={{ flex: 1, margin: 100 }}>
            <SelectList
                setSelected={(val) => setSelectedAudio(val)}
                data={audioList}
                save="value"
                defaultOption={require(rutaAudio + "Cristiano_Siuu.m4a")}
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    title="PLAY"
                    onPress={() => playSavedSound(audio)}
                ></Button>
                <Button
                    title="Pause"
                    onPress={() => pauseAudio(audio)}
                ></Button>
                <Button
                    title="Resume"
                    onPress={() => resumeAudio(audio)}
                ></Button>
                <Button title="Stop" onPress={() => stopAudio(audio)}></Button>
            </View>
        </View>
    );
};

export default Ejercicio7;
