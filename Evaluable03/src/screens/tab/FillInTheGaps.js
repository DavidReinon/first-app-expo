import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useSafeArea } from "native-base";

export default function FillInTheGaps() {
    const data = require("../../utils/fill_in_the_gaps.json");
    const levelOne = data[0].levelOne;
    const levelTwo = data[0].levelTwo;

    const [tries, setTries] = useState(0);
    const [level, setLevel] = useState(0);
    const [sentence, setSentence] = useState(null);
    const [adjective, setAdjective] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");

    const randomNumber = (number) => {
        if (Number(number) === 1) {
            return Math.floor(Math.random() * levelOne.adjectives.length); //0-5
        }
        return Math.floor(Math.random() * levelTwo.adjectives.length); //0-7
    };

    const generateLevel = (number) => {
        const random = randomNumber(number);
        if (number === 1) {
            setLevel(number);
            setAdjective(levelOne.adjectives[random]);
            setSentence(levelOne.sentences[random]);
            return;
        }
        if (number === 2) {
            setLevel(number);
            setAdjective(levelTwo.adjectives[random]);
            setSentence(levelTwo.sentences[random]);
            return;
        }
    };
    const correctAnswer = () => {
        if (adjective === userAnswer.toLowerCase()) {
            if (level === 2) {
                alert("You WIN!!, Try Again");
                setTries(0);
                generateLevel(1);
                setLevel(1);
                return;
            }
            generateLevel(2);
            setLevel(2);
            return;
        }
        if (tries === 2) {
            alert("You Lost, Try Again");
            setTries(0);
            generateLevel(1);
            return;
        }
        alert("Incorrect, you have other oportunity");
        setTries(tries + 1);
    };

    useEffect(() => {
        generateLevel(1);
    }, []);

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <View style={{ padding: 2 }}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        {sentence}
                    </Text>
                </View>
            </View>
            <TextInput
                style={{
                    color: "white",
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlignVertical: "center",
                    backgroundColor: "black",
                    height: 80,
                    width: 200,
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
                    backgroundColor: "black",
                    height: 80,
                    width: 200,
                }}
                onPress={correctAnswer}
            >
                <Text style={{ fontSize: 20, color: "white" }}>Check!</Text>
            </TouchableOpacity>
        </View>
    );
}
