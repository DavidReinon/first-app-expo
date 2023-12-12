import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import ScreensContext from "./ScreensContext";
import { playSavedSound } from "../services/AudioServices";

const Tab2_2 = () => {
    const { audio } = useContext(ScreensContext);

    useEffect(() => {
        if (audio) {
            playSavedSound(audio);
        }
    }, [audio]);

    return (
        <View>
            <Text>Sonando audio.</Text>
        </View>
    );
};

export default Tab2_2;
