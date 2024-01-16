import { TouchableOpacity, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getData, playUriSound } from "../../services/Services";
import * as allData from "../../utils/fill_in_the_gaps.json";
const data = allData[0];

export default function FillInTheGaps() {
    const urlApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const maxTries = 3;
    const levelTranslator = {
        1: data.levelOne,
        2: data.levelTwo,
    };
    const levels = Object.keys(levelTranslator)
        .map((level) => Number(level))
        .sort((a, b) => a - b);

    const [tries, setTries] = useState(0);
    const [level, setLevel] = useState(1);
    const [sentence, setSentence] = useState(null);
    const [adjective, setAdjective] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);

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

    useEffect(() => generateLevel(levels[0]), []);

    useEffect(() => {
        if (tries > 0 && tries < maxTries)
            return alert(
                `Incorrect, you have ${maxTries - tries} oportunities left`
            );
        if (tries === maxTries) return resetGame("You Lost, Try Again");
    }, [tries]);

    const randomNumber = (number) => {
        return Math.floor(
            Math.random() * levelTranslator[number].adjectives.length
        );
    };

    const generateLevel = (number) => {
        const random = randomNumber(number);
        const levelData = levelTranslator[number];

        setLevel(number);
        setAdjective(levelData.adjectives[random]);
        setSentence(levelData.sentences[random]);
        setUserAnswer(null);
    };

    const resetAnswer = () => {
        setTries((prev) => prev + 1);
        setUserAnswer(null);
    };

    const resetGame = (alertMessage) => {
        if (alertMessage) alert(alertMessage);

        setTries(0);
        generateLevel(levels[0]);
    };

    const correctAnswer = () => {
        const isSuccess = adjective === userAnswer.toLowerCase();

        if (!isSuccess) return resetAnswer();

        if (isSuccess && level < levels[levels.length - 1])
            return generateLevel(level + 1);

        return resetGame("You WIN!!, Try Again");
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 80,
                display: "flex",
                rowGap: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                }}
            >
                {sentence}
            </Text>
            <TextInput
                style={{
                    color: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlignVertical: "center",
                    height: 30,
                    width: 200,
                    textAlign: "center",
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                }}
                onChangeText={(text) => setUserAnswer(text)}
                value={userAnswer}
            />
            <TouchableOpacity
                style={{
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlignVertical: "center",
                    backgroundColor: !userAnswer ? "grey" : "black",
                    height: 60,
                    width: 200,
                }}
                onPress={correctAnswer}
                disabled={!userAnswer}
            >
                <Text style={{ fontSize: 20, color: "white" }}>Check!</Text>
            </TouchableOpacity>
        </View>
    );
}
