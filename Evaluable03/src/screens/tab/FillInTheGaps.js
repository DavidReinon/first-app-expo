import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useSafeArea } from "native-base";

export default function FillInTheGaps() {
    const data = require("../../utils/fill_in_the_gaps.json");
    const levelOne = data[0].levelOne;
    const levelTwo = data[0].levelTwo;
    const [sentence, setSentence] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);

    const randomNumber = (number) => {
        if (Number(number) === 1) {
            return Math.floor(Math.random() * levelOne.adjectives.length); //0-5
        }
        return Math.floor(Math.random() * levelTwo.adjectives.length); //0-7
    };

    const firstRandom = randomNumber(1);
    setSentence(levelOne.sentences[firstRandom]);

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
                //onPress={() => }
            >
                <Text style={{ fontSize: 20, color: "white" }}>Check!</Text>
            </TouchableOpacity>
        </View>
    );
}