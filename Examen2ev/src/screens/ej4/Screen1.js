import React, { useContext, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import ScreensContext from "./ScreensContext";
import { Audio } from "expo-av";

const RecordingScreen = ({ navigation }) => {
    const { audioList, setAudioList } = useContext(ScreensContext);
    const [recording, setRecording] = useState(null);
    const [audioUri, setAudioUri] = useState(null);
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = async () => {
        try {
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording); //recording
        } catch (err) {
            console.error(err);
        }
    };

    const stopRecording = async () => {
        await recording.stopAndUnloadAsync();
        setAudioUri(recording.getURI());
    };

    const playRecording = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: audioUri } // Cambia para usar el enlace URI directamente
            );
            await sound.playAsync();
        } catch (error) {
            console.error("No se pudo reproducir audio");
        }
    };

    const handleSaveRecording = () => {
        let newArray = [...audioList];
        newArray.push(audioUri);
        console.log(audioUri);
        setAudioList(newArray);
    };

    const handleListen = () => {
        navigation.navigate("Screen2");
    };

    const handleStartRecording = () => {
        setIsRecording(true);
        startRecording(); // Agrega paréntesis para llamar a la función
    };
    const handleStopRecording = () => {
        setIsRecording(false);
        stopRecording(); // Agrega paréntesis para llamar a la función
    };

    return (
        <View style={styles.container}>
            {!isRecording ? (
                <Button
                    title="Start Recording"
                    onPress={handleStartRecording}
                />
            ) : (
                <Button title="Stop Recording" onPress={handleStopRecording} />
            )}

            <Button title="Play Recording" onPress={playRecording} />
            <Button title="Save Recording" onPress={handleSaveRecording} />
            <Button title="Listen..." onPress={handleListen} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default RecordingScreen;
