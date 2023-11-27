import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useState } from "react";

const Tab1 = () => {
    const [data, setData] = useState();
    const [character, setCharacter] = useState(0);

    const getData = async (url) => {
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const json = await resp.json();
                setData(json);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const characterAnterior = () => {
        setCharacter((prevCharacter) =>
            prevCharacter === 0 ? prevCharacter + 19 : prevCharacter - 1
        );
    };

    const characterSiguiente = () => {
        setCharacter((prevCharacter) =>
            prevCharacter === 19 ? prevCharacter - 19 : prevCharacter + 1
        );
    };

    const pageAnterior = () => {
        if (data.info.prev !== null) {
            getData(data.info.prev);
        } else {
            getData(
                `https://rickandmortyapi.com/api/character?page=${data.info.pages}`
            );
        }
    };

    const pageSiguiente = () => {
        if (data.info.next !== null) {
            getData(data.info.next);
        } else {
            getData(`https://rickandmortyapi.com/api/character?page=1`);
        }
    };

    return (
        <View style={styles.container}>
            <Button
                title="RICKY Y MORTI"
                onPress={() =>
                    getData(`https://rickandmortyapi.com/api/character?page=1`)
                }
            ></Button>

            {data !== undefined && (
                <View>
                    <Image
                        source={{
                            uri: data.results[character].image,
                        }}
                        style={styles.image}
                    />
                    <Text styles={styles.textos}>
                        {data.results[character].name}
                    </Text>
                    <Text styles={styles.textos}>
                        {data.results[character].species}
                    </Text>
                    <Text styles={styles.textos}>
                        {data.results[character].status}
                    </Text>
                </View>
            )}

            <View style={styles.distribucionBotones}>
                <Button
                    title="ANTERIOR"
                    onPress={() => characterAnterior()}
                ></Button>
                <Button
                    title="SIGUIENTE"
                    onPress={() => characterSiguiente()}
                ></Button>
            </View>
            <View style={styles.distribucionBotones}>
                <Button
                    title="ANTERIORES"
                    onPress={() => pageAnterior()}
                ></Button>
                <Button
                    title="SIGUIENTES"
                    onPress={() => pageSiguiente()}
                ></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textos: {
        textAlign: "center",
    },
    image: {
        height: 300,
        width: 410,
    },
    distribucionBotones: {
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default Tab1;
