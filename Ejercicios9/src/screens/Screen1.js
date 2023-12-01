import { useContext, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import ScreensContext from "./ScreensContext";

const Screen1 = (props) => {
    const { setData } = useContext(ScreensContext);
    const [word, setWord] = useState(null);

    const getData = async () => {
        try {
            const api = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            if (api.ok) {
                const result = await api.json();
                console.log(result);
                setData(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const showResult = () => {
        getData();
        props.navigation.navigate("Screen2");
    };
    return (
        <View style={{flex: 1, margin: 10}}>
            <TextInput style={styles.inputs} onChangeText={(newWord) => setWord(newWord)}></TextInput>
            <Button color={"orange"} title="BUSCAR" onPress={() => showResult()}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    inputs: {
        padding: 7,
    },
});
export default Screen1;
