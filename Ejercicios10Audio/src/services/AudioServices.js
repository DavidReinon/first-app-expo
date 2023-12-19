import { Audio } from "expo-av";

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

//export {playLocalSound} //para componentes no defualt
export default playLocalSound;
export { saveSound, playSavedSound, pauseAudio, stopAudio, resumeAudio };
