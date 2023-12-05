import { useContext, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import ScreensContext from "./ScreensContext";
import { getData } from "../services/services";

const Screen3 = (props) => {
    const { setData } = useContext(ScreensContext);
    const [word, setWord] = useState(null);

    const fetchData = async () => {
        try {
            const result = await getData(
                `https://www.balldontlie.io/api/v1/players?search=${word}`
            );
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    const showResult = () => {
        fetchData();
        props.navigation.navigate("Screen4");
    };
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <TextInput
                style={styles.inputs}
                onChangeText={(newWord) => setWord(newWord)}
            ></TextInput>
            <Button
                color={"blue"}
                title="BUSCAR"
                onPress={() => showResult()}
            ></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    inputs: {
        padding: 7,
    },
});
export default Screen3;
