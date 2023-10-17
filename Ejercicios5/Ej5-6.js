import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function App() {
    const [myArray, setMyArray] = useState([
        {
            title: "Este es mi titulo 1",
            image: require("./assets/sunset1.jpg"),
            text: "blabsl",
        },
        {
            title: "Este es mi titulo 2",
            image: require("./assets/sunset2.jpg"),
            text: "blabsl",
        },
        {
            title: "Este es mi titulo 3",
            image: require("./assets/sunset3.jpg"),
            text: "blabsl",
        },
    ]);

    const handleOnPress = (title) => {
        let newArray = [...myArray];
        if (title === "Este es mi titulo 1") {
            newArray[0].title = "Titulo 1 cambiado";
            setMyArray(newArray);
            return;
        }
        if (title === "Este es mi titulo 2") {
            newArray[1].title = "Titulo 2 cambiado";
            setMyArray(newArray);
            return;
        }
        if (title === "Este es mi titulo 3") {
            newArray[2].title = "Titulo 3 cambiado";
            setMyArray(newArray);
            return;
        }
    };

    return (
        <View style={styles.container}>
            {myArray.map((oneElement, index) => (
                <View key={index}>
                    <Text
                        style={styles.title}
                        onPress={() => handleOnPress(oneElement.title)}
                    >
                        {oneElement.title}
                    </Text>
                    <Image
                        style={styles.images}
                        source={oneElement.image}
                    ></Image>
                    <Text style={styles.normalText}>{oneElement.text}</Text>
                </View>
            ))}
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
    images: {
        height: 170,
        width: 300,
    },
    title: {
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    normalText: {
        fontSize: 15,
        alignSelf: "center",
    },
});
