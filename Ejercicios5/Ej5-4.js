import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function App() {
    const [text, setText] = useState("");
    const [myArray, setMyArray] = useState([]);
    const [indexMyArray, setIndexMyArray] = useState();
    const [elementMyArray, setElementMyArray] = useState();

    const handleOnPress = (button) => {
        if (button === "insert") {
            if (text === "") return alert("No se ha escrito nada");
            let newArray = [...myArray];
            newArray.push(text);
            setMyArray(newArray);
        }
        if (button === "show") {
            if (!myArray[indexMyArray]) {
                return alert("Posicion del array vacia");
            }
            setElementMyArray(myArray[indexMyArray]);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta tu texto..."
                onChangeText={(newText) => setText(newText)}
                defaultValue=""
            />
            <Button title="Pulsa" onPress={() => handleOnPress("insert")} />
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta posicion del array a mostrar..."
                onChangeText={(newText) => setIndexMyArray(newText)}
                defaultValue=""
            />
            <Button title="Pulsa" onPress={() => handleOnPress("show")} />
            <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                {elementMyArray}
            </Text>
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
