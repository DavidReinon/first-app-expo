import { useState, useEffect } from "react";
import {
    Text,
    Button,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";

const Screen3 = () => {
    const [imageData, setImageData] = useState({});
    //-2 porque la primera vez que se asigna ╦ cuenta como 1, y con el useState predeterminado cuenta 2
    const [contador, setContador] = useState(-2);

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
    }, [imageData]);

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageData.url }}
                style={{ height: 400, width: 400 }}
            />
            <Button onPress={() => getData()} title="Pulsame!" />
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
export default Screen3;
