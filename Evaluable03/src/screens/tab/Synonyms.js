import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { getData, playUriSound } from "../../services/Services";
import * as allData from "../../utils/synonyms.json";
const data = allData[0];

export default function Synonyms() {
    const maxTries = 3;
    const urlApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const levelTranslator = {
        1: data.levelOne, //Array directo (solo adjetivos)
        2: data.levelTwo, //Array directo (solo adjetivos)
    };

    const levels = Object.keys(levelTranslator)
        .map((level) => Number(level))
        .sort((a, b) => a - b);

    const [startGame, setStartGame] = useState(true);
    const [tries, setTries] = useState(0);
    const [level, setLevel] = useState(1);
    const [randomAdjective, setRandomAdjective] = useState(null);
    const [correctSynonym, setCorrectSynonym] = useState(null);
    const [synonyms, setSynonyms] = useState(null);

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
        generateLevel(levels[0]);
    }, []);

    useEffect(() => {
        if (!randomAdjective) return;

        const getAudio = async () => {
            try {
                const apiData = await getData(urlApi + randomAdjective || "");
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
    }, [randomAdjective]);

    const fetchSynonyms = async (level) => {
        if (!levelTranslator[level]) {
            console.error("Invalid level:", level);
            return;
        }
        let synonymsArray = [];

        for (let adjective of levelTranslator[level]) {
            try {
                const apiData = await getData(urlApi + adjective);

                if (
                    apiData &&
                    apiData.length > 0 &&
                    apiData[0].meanings &&
                    apiData[0].meanings.length > 0 &&
                    apiData[0].meanings[0].synonyms &&
                    apiData[0].meanings[0].synonyms.length > 0
                ) {
                    synonymsArray.push(apiData[0].meanings[0].synonyms[0]);
                }
            } catch (error) {
                console.error("Error fetching synonym for", adjective, error);
            }
        }

        setSynonyms(synonymsArray);
    };

    const getRandomAdjective = (numberLevel) => {
        const arrayAdjectives = levelTranslator[numberLevel];
        const randomIndex = Math.floor(Math.random() * arrayAdjectives.length);
        const randomAdjective = arrayAdjectives[randomIndex];
        setRandomAdjective(randomAdjective);
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
        getRandomAdjective(number);
        fetchSynonyms(number);
    };

    const correctAnswer = (selectedSynonym) => {
        const isSuccess = correctSynonym === selectedSynonym.toLowerCase();

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
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
            }}
        >
            {startGame
                ? synonyms != null && (
                      <ScrollView>
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
                                          correctAnswer(synonym);
                                      }}
                                  >
                                      <Text style={{ color: "white" }}>
                                          {synonym}
                                      </Text>
                                  </TouchableOpacity>
                              </View>
                          ))}
                      </ScrollView>
                  )
                : tryAgainComponent()}
        </View>
    );
}
