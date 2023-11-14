import { useState, useEffect } from "react";
import { Button, View, StyleSheet, Image, Dimensions } from "react-native";

const Screen2 = () => {
    const [imageData, setImageData] = useState({});
    const screnDimension = Dimensions.get("window");

    const getData = async () => {
        try {
            const response = await fetch(
                "https://api.thecatapi.com/v1/images/search?size=full"
            );
            if (response.ok) {
                const data = await response.json();
                setImageData(data[0]);
                console.log(data);
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
            <Image
                source={{ uri: imageData.url }}
                style={{ height: 400, width: 400 }}
            />
            <Button onPress={() => getData()} title="Pulsame!" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
});
export default Screen2;
