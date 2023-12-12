import { Audio } from "expo-av";

const playLocalSound = async (audioLink) => {
    const { sound } = await Audio.Sound.createAsync(audioLink);
    await sound.playAsync();
};

export default playLocalSound;
//export {playLocalSound} //para componentes no defualt

const saveSound = async (audioLink) => {
    return await Audio.Sound.createAsync(audioLink);
};
export { saveSound };

const playSavedSound = async (sound) => {
    await sound.playAsync();
};
export { playSavedSound };