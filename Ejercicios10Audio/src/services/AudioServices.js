import { Audio } from "expo-av";

const playLocalSound = async (audioLink) => {
    try {
        const { sound } = await Audio.Sound.createAsync(audioLink);
        await sound.playAsync();
    } catch (error) {
        console.error("No se pudo reproducir audio");
    }
};

//export {playLocalSound} //para componentes no defualt
export default playLocalSound;

const saveSound = async (audioLink) => {
    return await Audio.Sound.createAsync(audioLink);
};
export { saveSound };

const playSavedSound = async (sound) => {
    await sound.playAsync();
};
export { playSavedSound };
