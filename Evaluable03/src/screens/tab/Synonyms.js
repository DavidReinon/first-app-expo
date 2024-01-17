import { TouchableOpacity, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { getData } from "../../services/Services";
import * as data from "../../utils/synonyms.json";

export default function Synonyms() {
    const [randomAdjective, setRandomAdjective] = useState("");
    const [synonyms, setSynonyms] = useState([]);
    const [correctSynonym, setCorrectSynonym] = useState("");
    const [result, setResult] = useState("");
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        getRandomAdjective();
    }, []);

    useEffect(() => {
        if (randomAdjective !== "") {
            getSynonyms(randomAdjective);
        }
    }, [randomAdjective]);

    const getRandomAdjective = () => {
        const levelOneAdjectives = data[0].levelOne;
        const randomIndex = Math.floor(
            Math.random() * levelOneAdjectives.length
        );
        const randomAdjective = levelOneAdjectives[randomIndex];
        setRandomAdjective(randomAdjective);
    };

    const getSynonyms = (searchTerm) => {
        const synonymsArray = [...data[0].levelTwo]; // Cambié a levelTwo para mostrar palabras del nivel dos
        const randomIndex = Math.floor(Math.random() * synonymsArray.length);
        const correctSynonym = synonymsArray[randomIndex];

        // Asignamos el sinónimo correcto al estado
        setCorrectSynonym(correctSynonym);

        // Barajamos el array de sinónimos
        synonymsArray.sort(() => Math.random() - 0.5);

        // Asignamos el array barajado al estado
        setSynonyms(synonymsArray);
    };

    const handleSynonymPress = (selectedSynonym) => {
        if (selectedSynonym === correctSynonym) {
            // Acertó, así que reproducimos nuevo sonido y mostramos nuevas palabras del nivel dos
            playLocalSound();
            getRandomAdjective(); // Cambia a la siguiente palabra
            setAttempts(0); // Reinicia los intentos
        } else {
            // Incorrecto, aumentamos el contador de intentos
            setAttempts(attempts + 1);

            if (attempts + 1 >= 2) {
                // Ha fallado dos veces, muestra alerta de game over
                Alert.alert(
                    "Game Over",
                    "Has fallado dos veces. ¡Inténtalo de nuevo!",
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                );
            } else {
                console.log("Incorrecto. Intenta de nuevo.");
            }
        }
    };

    const playLocalSound = async () => {
        try {
            const response = await getData(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${correctSynonym}`
            );
            const audio = response[0].phonetics[0].audio;
            setResult(audio);

            const { sound } = await Audio.Sound.createAsync({ uri: result });
            await sound.playAsync();
        } catch (error) {
            console.error("Error al reproducir sonido:", error);
        }
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
            }}
        >
            {synonyms.map((synonym, index) => (
                <View style={{ padding: 2 }} key={index}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 8,
                            justifyContent: "center",
                            alignItems: "center",
                            textAlignVertical: "center",
                            width: 80,
                            height: 80,
                            backgroundColor: "blue",
                        }}
                        onPress={() => {
                            handleSynonymPress(synonym);
                        }}
                    >
                        <Text style={{ color: "white" }}>{synonym}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}
