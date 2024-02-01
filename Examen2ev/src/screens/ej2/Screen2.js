import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import ScreensContext from "./ScreensContext";
import { Audio } from "expo-av";

export default function Screen2() {
    const { data } = useContext(ScreensContext);
    const [songIndex, setSongIndex] = useState(0);
    const [sound, setSound] = useState(null);
    const [songIsPaused, setSongIsPaused] = useState(false);

    useEffect(() => {
        const loadSound = async () => {
            if (data) {
                const { sound: soundSaved } = await Audio.Sound.createAsync({
                    uri: data.data[songIndex].preview,
                });
                setSound(soundSaved);
            }
        };

        loadSound();
    }, [data, songIndex]);

    const playSound = async () => {
        try {
            if (sound) {
                await sound.playAsync();
            } else {
                console.error(
                    "No se pudo reproducir audio: El sonido no está definido"
                );
            }
        } catch (error) {
            console.error("No se pudo reproducir audio:", error);
        }
    };
    const pauseAudio = async () => {
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

    const stopAudio = async () => {
        await sound.stopAsync();
    };

    const resumeAudio = async () => {
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
    //data.total
    const nextSong = async () => {
        setSongIndex((prev) => (prev + 1 === data.total ? 0 : prev + 1));
    };

    const backSong = () => {
        setSongIndex((prev) => (prev - 1 === 0 ? data.total : prev - 1));
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Album: {data.data[songIndex].album.title}
                </Text>
                <Text style={styles.text}>
                    Canción: {data.data[songIndex].title}
                </Text>
                <View style={styles.audioButtons}>
                    <View style={styles.carousel}>
                        <AntDesign
                            name="stepbackward"
                            size={75}
                            color="black"
                            onPress={backSong}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <MaterialIcons
                            name="play-circle-outline"
                            size={90}
                            color="black"
                            onPress={playSound}
                        />
                        <Ionicons
                            name="pause-circle"
                            size={90}
                            color="black"
                            onPress={songIsPaused ? resumeAudio : pauseAudio}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Entypo
                            name="controller-stop"
                            size={90}
                            color="black"
                            onPress={stopAudio}
                        />
                    </View>
                    <View style={styles.carousel}>
                        <AntDesign
                            name="stepforward"
                            size={75}
                            color="black"
                            onPress={nextSong}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
    },
    audioButtons: {
        flexDirection: "row",
        position: "relative",
        justifyContent: "center",
    },
    carousel: {
        padding: 2,
        marginTop: 35,
    },
    buttons: {
        padding: 2,
        marginTop: 30,
    },
});
