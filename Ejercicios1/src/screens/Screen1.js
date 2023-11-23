import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const Screen1 = () => {
    const [data, setData] = useState("");
    const [indexEpisode, setIndexEpisode] = useState(0);

    const getData = async () => {
        try {
            const resp = await fetch(
                "https://api.sampleapis.com/rickandmorty/episodes"
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

    useEffect(() => {
        getData();
    }, []);

    const nextEpisode = () => {
        setIndexEpisode((prevEpisode) => prevEpisode + 1);
    };
    const backEpisode = () => {
        setIndexEpisode((prevEpisode) => prevEpisode - 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>
                    {data.length > 0 &&
                        data[indexEpisode] != undefined &&
                        data[indexEpisode].episode +
                            " - " +
                            data[indexEpisode].season +
                            " : " +
                            data[indexEpisode].name}
                </Text>
            </View>
            <View style={styles.botons}>
                <Button title="<" onPress={() => backEpisode()}></Button>
                <Button title=">" onPress={() => nextEpisode()}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textView: {
        alignItems: "center",
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
    },
    botons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
    },
});
export default Screen1;
