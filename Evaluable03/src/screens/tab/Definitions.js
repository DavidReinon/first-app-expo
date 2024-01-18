import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, ScrollView, Alert } from "react-native";
import { getData, playUriSound } from "../../services/Services";
import * as allData from "../../utils/definitions.json";
const data = allData[0];

const Definitios = () => {
    const maxTries = 3;
    const urlApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const levelTranslator = {
        1: data.levelOne,
        2: data.levelTwo,
    };
    const levels = Object.keys(levelTranslator)
        .map((level) => Number(level))
        .sort((a, b) => a - b);

    const [startGame, setStartGame] = useState(true);
    const [tries, setTries] = useState(0);
    const [level, setLevel] = useState(1);
    const [randomDefinition, setRandomDefinition] = useState(null);
    const [currentWord, setCurrentWord] = useState("");
    const [shuffledDefinition, setShuffledDefinition] = useState([]);
    const [userOrder, setUserOrder] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [lastClickedWord, setLastClickedWord] = useState(null);

    useEffect(() => {
        if (tries > 0 && tries < maxTries)
            return alert(
                `Incorrect, you have ${maxTries - tries} oportunities left`
            );
        if (tries === maxTries) return resetGame("You Lost, Try Again");
    }, [tries]);

    useEffect(() => {
        generateLevel(levels[0]);
    }, []);

    useEffect(() => {
        if (!randomDefinition) return;

        const getAudio = async () => {
            try {
                const apiData = await getData(urlApi + randomDefinition || "");
                if (apiData && apiData.length > 0 && apiData[0].phonetics) {
                    const linkAudio = apiData[0].phonetics[0].audio;

                    playUriSound(linkAudio);
                    setCorrectSynonym(apiData[0].meanings[0].synonyms[0]);
                } else {
                    console.error("Invalid API Data structure");
                }
            } catch (error) {
                console.error("Error al obtener audio:", error);
            }
        };

        getAudio();
    }, [randomDefinition]);

    const fetchDefinitions = async (level) => {
        if (!levelTranslator[level]) {
            console.error("Invalid level:", level);
            return;
        }
        try {
            const apiData = await getData(urlApi + randomDefinition);

            if (
                apiData &&
                apiData.length > 0 &&
                apiData[0].meanings &&
                apiData[0].meanings.length > 0 &&
                apiData[0].meanings[0].definitions &&
                apiData[0].meanings[0].definitions.length > 0
            ) {
                const definition =
                    apiData[0].meanings[0].definitions[0].definition;
                setShuffledDefinition(shuffleWords(definition));
            }
        } catch (error) {
            console.error("Error fetching definitions:", error);
        }
    };

    const getRandomDefinition = (numberLevel) => {
        const arrayDefinitions = levelTranslator[numberLevel];
        const randomIndex = Math.floor(Math.random() * arrayDefinitions.length);
        const randomDefinition = arrayDefinitions[randomIndex];
        setRandomDefinition(randomDefinition);
    };

    const resetAnswer = () => {
        setTries((prev) => prev + 1);
    };

    const resetGame = (alertMessage) => {
        setStartGame(false);
        if (alertMessage) alert(alertMessage);

        setTries(0);
    };

    const generateLevel = (number) => {
        setLevel(number);
        getRandomDefinition(number);
        fetchDefinitions(number);
    };

    const shuffleWords = (definition) => {
        // Divide la definición en palabras y desordénalas
        const words = definition.split(" ").sort(() => Math.random() - 0.5);
        return words;
    };

    const handleWordPress = (word) => {
        // Si no hay ninguna palabra previamente clicada, guarda la palabra actual
        if (!lastClickedWord) {
            setLastClickedWord(word);
        } else {
            // Intercambia las posiciones de las palabras
            const indexLastClicked =
                shuffledDefinition.indexOf(lastClickedWord);
            const indexCurrentClicked = shuffledDefinition.indexOf(word);

            if (indexLastClicked !== -1 && indexCurrentClicked !== -1) {
                const newOrder = [...shuffledDefinition];
                [newOrder[indexLastClicked], newOrder[indexCurrentClicked]] = [
                    newOrder[indexCurrentClicked],
                    newOrder[indexLastClicked],
                ];

                setShuffledDefinition(newOrder);
            }

            // Limpia la palabra previamente clicada
            setLastClickedWord(null);
        }
    };

    const handleCheck = () => {
        // Implementa la lógica para verificar si las palabras están ordenadas correctamente
        if (arraysEqual(userOrder, shuffledDefinition)) {
            // El usuario acertó, pasar al siguiente nivel o finalizar el juego
            if (currentLevel === 2) {
                // Mostrar botón "Try again" o realizar otras acciones de finalización del juego
                Alert.alert("¡Felicidades!", "Has completado el juego.");
            } else {
                // Pasar al siguiente nivel
                setCurrentLevel(currentLevel + 1);
                setUserOrder([]);
                setAttempts(0);
            }
        } else {
            // El usuario cometió un error
            setAttempts(attempts + 1);

            if (attempts >= 2) {
                // Mostrar botón "Try again" o realizar otras acciones de finalización del juego
                Alert.alert(
                    "Game Over",
                    "Has cometido más de dos errores. ¡Inténtalo de nuevo!"
                );
            } else {
                // Mostrar mensaje de intento fallido
                Alert.alert("Incorrecto", "Intenta de nuevo.");
            }
        }
    };

    // Función para comparar dos arrays
    const arraysEqual = (arr1, arr2) => {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
            }}
        >
            <View style={{ flexDirection: "column" }}>
                <ScrollView vertical={true}>
                    {shuffledDefinition.map((word, index) => (
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
                                onPress={() => handleWordPress(word)}
                            >
                                <Text style={{ color: "white" }}>{word}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity
                    style={{
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        textAlignVertical: "center",
                        width: 80,
                        height: 80,
                        backgroundColor: "black",
                    }}
                    onPress={handleCheck}
                >
                    <Text style={{ color: "white" }}>Comprobar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Definitios;
