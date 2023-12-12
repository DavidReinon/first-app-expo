import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import ScreensContext from "./ScreensContext";
import { saveSound } from "../services/AudioServices";

const Tab2_1 = (props) => {
    const { setAudio } = useContext(ScreensContext);

    const playAudioOnOtherScreen = async () => {
        const { sound } = await saveSound(
            require("../assets/audio/Cristiano_Siuu.m4a")
        );
        setAudio(sound);
        props.navigation.navigate("Tab2_2");
    };
    return (
        <View>
            <Button title=":)" onPress={playAudioOnOtherScreen}></Button>
        </View>
    );
};

export default Tab2_1;
