import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function App() {
    const [text, setText] = useState("");
    const [myArrayText, setMyArrayText] = useState([]);
    const [myArrayNumber, setMyArrayNumber] = useState([]);

    const handleOnPress = () => {
        if (text === "") return alert("No se ha escrito nada");
        let newArray;
        if (isNaN(text)) {
            newArray = [...myArrayText];
            newArray.push(text);
            setMyArrayText(newArray);
            return;
        }
        newArray = [...myArrayNumber];
        newArray.push(parseFloat(text));
        setMyArrayNumber(newArray);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta tu texto..."
                onChangeText={(newText) => setText(newText)}
                defaultValue=""
            />
            {myArrayText.map((element, index) => (
                <Text key={index.toString()}>{element}</Text>
            ))}
            {myArrayNumber.map((element, index) => (
                <Text key={index.toString()}>{element}</Text>
            ))}
            <Button title="Pulsa" onPress={() => handleOnPress()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
