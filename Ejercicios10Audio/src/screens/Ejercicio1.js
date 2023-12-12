import { View, Text, Button } from "react-native";
import React from "react";
import playLocalSound from "../services/AudioServices";

const Ejercicio1 = () => {
    const playAudio = () =>
        playLocalSound(require("../assets/audio/Cristiano_Siuu.m4a"));

    return (
        <View>
            <Button title="|>" onPress={playAudio}></Button>
        </View>
    );
};

export default Ejercicio1;
