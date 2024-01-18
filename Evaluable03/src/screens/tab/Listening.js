import { useState, useEffect } from "react";
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { getData, playUriSound } from "../../services/Services";
import * as allData from "../../utils/listening.json";
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

    const gridConfig = {
        1: { columns: 2, paddingHorizontal: 90 },
        2: { columns: 3, paddingHorizontal: 30 },
    };

    const [startGame, setStartGame] = useState(true);
    const [tries, setTries] = useState(0);
    const [level, setLevel] = useState(1);
    const [adjectivesRandomList, setAdjectivesRandomList] = useState(null);
    const [adjective, setAdjective] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);
    useEffect(() => {
        if (!startGame) return;

        generateLevel(levels[0]);
    }, [startGame]);

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

        const initialRandomList = [...adjectivesRandomList];

        const intervalId = setInterval(() => {
            changeRandomAdjectivesList();
        }, 100);

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            setAdjectivesRandomList(initialRandomList);
        }, 3000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [adjective]);

    useEffect(() => {
        if (!userAnswer) return;

        correctAnswer();
    }, [userAnswer]);

    useEffect(() => generateLevel(levels[0]), []);

    const resetAnswer = () => {
        setTries((prev) => prev + 1);
        setUserAnswer(null);
    };

    const resetGame = (alertMessage) => {
        setStartGame(false);
        if (alertMessage) alert(alertMessage);

        setTries(0);
    };

    const getRandomWord = () => {
        if (!adjectivesRandomList) return;

        const randomIndex = Math.floor(
            Math.random() * levelTranslator[level].length
        );
        return levelTranslator[level][randomIndex];
    };

    const changeRandomAdjectivesList = () => {
        setAdjectivesRandomList((prevList) => {
            const newList = prevList.map(() => {
                return getRandomWord();
            });
            return newList;
        });
    };

    const selectAdjectiveAnswer = (adjectivesList) => {
        const randomAdjective = Math.floor(
            Math.random() * adjectivesList.length
        );
        setAdjective(adjectivesList[randomAdjective]);
    };
    const generateRandomAdjectivesList = (numberLevel) => {
        const columns = gridConfig[numberLevel].columns;
        const eliminatingNumber =
            levelTranslator[numberLevel].length - columns * columns;

        let newArray = [...levelTranslator[numberLevel]];
        // Algoritmo de mezcla Fisher-Yates
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        newArray.splice(0, eliminatingNumber);

        selectAdjectiveAnswer(newArray);
        setAdjectivesRandomList(newArray);
    };

    const generateLevel = (number) => {
        setLevel(number);
        generateRandomAdjectivesList(number);
        setUserAnswer(null);
    };

    const correctAnswer = () => {
        const isSuccess = adjective === userAnswer.toLowerCase();

        if (!isSuccess) return resetAnswer();

        if (isSuccess && level < levels[levels.length - 1])
            return generateLevel(level + 1);

        return resetGame("You WIN!!, Try Again");
    };

    const tryAgainComponent = () => {
        return (
            <TouchableOpacity
                style={{
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlignVertical: "center",
                    width: 80,
                    height: 80,
                    backgroundColor: "blue",
                    margin: 5,
                }}
                onPress={() => setStartGame(true)}
            >
                <Text style={{ fontSize: 20, color: "white" }}>Try Again</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                flex: 1,
                paddingHorizontal: gridConfig[level].paddingHorizontal,
                paddingVertical: 30,
            }}
        >
            {startGame
                ? adjectivesRandomList != null &&
                  adjectivesRandomList.map((element, index) => {
                      return (
                          <TouchableOpacity
                              key={index}
                              style={{
                                  borderRadius: 8,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  textAlignVertical: "center",
                                  width: 80,
                                  height: 80,
                                  backgroundColor: "blue",
                                  margin: 5,
                              }}
                              onPress={() => setUserAnswer(element)}
                          >
                              <Text style={{ color: "white" }}>{element}</Text>
                          </TouchableOpacity>
                      );
                  })
                : tryAgainComponent()}
        </View>
    );
}
