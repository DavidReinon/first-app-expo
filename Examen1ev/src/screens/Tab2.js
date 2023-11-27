import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const Tab2 = () => {
    const [name, setName] = useState("");
    const [data, setData] = useState();

    const getData = async (page) => {
        try {
            const resp = await fetch(
                `https://www.balldontlie.io/api/v1/players?search=${name}&page=${page}`
            );
            if (resp.ok) {
                const json = await resp.json();
                setData(json);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const showNextPlayers = () => {
        let page = 1;
        if (data.meta.next_page != null) {
            page = data.meta.next_page;
        }
        getData(page);
    };

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Nombre"
                    onChangeText={(text) => setName(text)}
                ></TextInput>
                <Button title="PULSA" onPress={() => getData(1)}></Button>
            </View>
            <View>
                {data !== undefined &&
                    data.data.map((element, index) => (
                        <Text style={styles.text} key={index}>
                            {element.first_name} {element.last_name}
                        </Text>
                    ))}
            </View>
            <Button
                title="SIGUIENTE"
                onPress={() => showNextPlayers()}
            ></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
    },
});
export default Tab2;
