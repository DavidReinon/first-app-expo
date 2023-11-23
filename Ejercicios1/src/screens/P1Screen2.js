import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useState } from "react";

const P1 = () => {
    const [palabra, setPalabra] = useState("");
    const [data, setData] = useState("");

    const getData = async () => {
        try {
            const resp = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`
            );
            if (resp.ok) {
                const json = await resp.json();
                //console.log(json);
                setData(json);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.buscar}>
                <TextInput
                    style={styles.input}
                    placeholder="Put word"
                    onChangeText={(text) => setPalabra(text)}
                ></TextInput>
                <Button title="Search Word" onPress={() => getData()}></Button>
            </View>
            <View style={styles.respuesta}>
                {data.length > 0 &&
                    data[0].meanings.map((element, index) => {
                        return (
                            <Text key={index}>
                                {Number(index + 1)}.{" "}
                                {element.definitions[0].definition}
                            </Text>
                        );
                    })}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
    },
    buscar: {
        margin: 10,
    },
    respuesta: {
        flex: 1,
        margin: 10,
        paddingLeft: 10,
        justifyContent: "center",
    },
});
export default P1;
