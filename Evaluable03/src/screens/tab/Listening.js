import { useState, useEffect } from "react";
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { getData, playUriSound } from "../../services/Services";
import * as allData from "../../utils/fill_in_the_gaps.json";
const data = allData[0];

export default function Listening() {
    const maxTries = 3;
    const urlApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const levelTranslator = {
        1: data.levelOne, //Array directo (solo adjetivos)
        2: data.levelTwo, //Array directo (solo adjetivos)
    };
    const levels = Object.keys(levelTranslator)
        .map((level) => Number(level))
        .sort((a, b) => a - b);

    const [tries, setTries] = useState(0);
    const [level, setLevel] = useState(1);
    const [adjective, setAdjective] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);

    useEffect(() => {
        if (tries > 0 && tries < maxTries)
            return alert(
                `Incorrect, you have ${maxTries - tries} oportunities left`
            );
        if (tries === maxTries) return resetGame("You Lost, Try Again");
    }, [tries]);

    useEffect(() => {
        if (!adjective) return;

        const getAudio = async () => {
            const apiData = await getData(urlApi + adjective || "");
            if (apiData && apiData.length > 0 && apiData[0].phonetics) {
                const linkAudio = apiData[0].phonetics[0].audio;
                playUriSound(linkAudio);
            } else {
                console.error("Invalid API Data structure");
            }
        };

        getAudio();
    }, [adjective]);

    //useEffect(() => generateLevel(levels[0]), []);

    const resetAnswer = () => {
        setTries((prev) => prev + 1);
        setUserAnswer(null);
    };

    const resetGame = (alertMessage) => {
        if (alertMessage) alert(alertMessage);

        setTries(0);
        generateLevel(levels[0]);
    };

    //Change
    const generateLevel = (number) => {
        const random = randomNumber(number);
        const levelData = levelTranslator[number]; //Array con las palabras

        setLevel(number);
        setAdjective(levelData[random]);
        setUserAnswer(null);
    };

    //Change
    const correctAnswer = () => {
        const isSuccess = adjective === userAnswer.toLowerCase();

        if (!isSuccess) return resetAnswer();

        if (isSuccess && level < levels[levels.length - 1])
            return generateLevel(level + 1);

        return resetGame("You WIN!!, Try Again");
    };

    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ padding: 2 }}>
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
                >
                    <Text style={{ color: "white" }}>Hola</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 2 }}>
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
                >
                    <Text style={{ color: "white" }}>Hola</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
