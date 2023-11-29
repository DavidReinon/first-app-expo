import { useState, useEffect } from "react";
import {
    Text,
    Button,
    View,
    StyleSheet,
    Image,
} from "react-native";

const Screen6 = () => {
    const [data, setData] = useState(null);
    const [characterIndex, setCharacterIndex] = useState(0);
    const limits = [0, 19]

    const getData = async () => {
        try {
            const response = await fetch(
                "https://rickandmortyapi.com/api/character"
            );
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const changeChacarter = (next) => {
        if (next) {
            setCharacterIndex((prevIndex) => prevIndex + 1 > limits[1] ? limits[0] : prevIndex + 1);
        } else {
            setCharacterIndex((prevIndex) => prevIndex - 1 < limits[0] ? limits[1] : prevIndex - 1);
        }
    }

    return (
        <View style={styles.container}>
            {data !== null && (
                <View style={styles.container}>
                    <Image
                        source={{
                            uri: data.results[characterIndex].image,
                        }}
                        style={styles.image}
                    />
                    <Text style={styles.textos}>{data.results[characterIndex].name}</Text>
                    <Text style={styles.textos}>
                        {data.results[characterIndex].species}
                    </Text>
                    <Text style={styles.textos}>{data.results[characterIndex].status}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Button title="Anterior" onPress={() => changeChacarter(false)}></Button>
                        <Button title="Siguiente" onPress={() => changeChacarter(true)}></Button>
                    </View>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 8,
    },
    image: {
        width: 300,
        height: 300,
    },
    textos: {
        fontSize: 14,
    },
});
export default Screen6;
