import { Audio } from "expo-av";

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            return result;
        }
    } catch (error) {
        console.error(error);
    }
};

export { getData };

const playLocalSound = async (audioLink) => {
    try {
        const { sound } = await Audio.Sound.createAsync(audioLink);
        await sound.playAsync();
    } catch (error) {
        console.error("No se pudo reproducir audio");
    }
};

const saveSound = async (audioLink) => {
    return await Audio.Sound.createAsync(audioLink);
};

const playSavedSound = async (sound) => {
    await sound.playAsync();
};

const pauseAudio = async (sound) => {
    try {
        const result = await sound.getStatusAsync();
        if (result.isLoaded) {
            if (result.isPlaying === true) {
                sound.pauseAsync();
            }
        }
    } catch (error) {
        console.log(error);
    }
};

const stopAudio = async (sound) => {
    await sound.stopAsync();
};

const resumeAudio = async (sound) => {
    try {
        const result = await sound.getStatusAsync();
        if (result.isLoaded) {
            if (result.isPlaying === false) {
                sound.playAsync();
            }
        }
    } catch (error) {
        console.log(error);
    }
};

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
        return recording; //recording
    } catch (err) {
        console.error(err);
    }
};

const stopRecording = async (recording) => {
    await recording.stopAndUnloadAsync();
    return recording.getURI(); //uri del recording (para reproducirlo despues)
};

//export {playLocalSound} //para componentes no defualt
export default playLocalSound;
export {
    saveSound,
    playSavedSound,
    pauseAudio,
    stopAudio,
    resumeAudio,
    startRecording,
    stopRecording,
};
