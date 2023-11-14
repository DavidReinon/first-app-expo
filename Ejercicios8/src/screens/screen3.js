import { useState, useEffect } from "react";
import {
    Text,
    Button,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";

const Screen2 = () => {
    const [imageData, setImageData] = useState({});
    const [contador, setContador] = useState(0);
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

    useEffect(() => {
        setContador((prevContador) => prevContador + 1);
    }, [contador]);

    const handleOnPress = () => {
        getData();
        setContador(contador);
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageData.url }}
                style={{ height: 400, width: 400 }}
            />
            <Button onPress={() => handleOnPress()} title="Pulsame!" />
            <Text style={{ fontSize: 20, alignSelf: "center" }}>
                {contador}
            </Text>
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
