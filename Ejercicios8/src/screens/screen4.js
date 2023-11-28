import { useState, useEffect } from "react";
import {
    Text,
    Button,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";

const Screen4 = () => {
    const [data, setData] = useState(null);

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

    return (
        <View style={styles.container}>
            {data !== null && (
                <View style={styles.container}>
                    <Image
                        source={{
                            uri: data.results[0].image,
                        }}
                        style={styles.image}
                    />
                    <Text style={styles.textos}>{data.results[0].name}</Text>
                    <Text style={styles.textos}>
                        {data.results[0].species}
                    </Text>
                    <Text styles={styles.textos}>{data.results[0].status}</Text>
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
export default Screen4;
