import { useState } from "react";
import { Button, View, StyleSheet, Image, Dimensions } from "react-native";

export default function App() {
    const [imageData, setImageData] = useState({});
    const screnDimension = Dimensions.get("window");

    const getData = async () => {
        try {
            const response = await fetch(
                "https://api.thecatapi.com/v1/images/search?size=full"
            );
            if (response.ok) {
                const data = await response.json();
                if (data[0].height >= screnDimension.height) {
                    data[0].height = screnDimension.height - 50;
                }
                if (data[0].width >= screnDimension.width) {
                    data[0].width = screnDimension.width - 20;
                }
                setImageData(data[0]);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageData.url }}
                style={{ height: imageData.height, width: imageData.width }}
            />
            <Button onPress={() => getData()} title="Pulsame!" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
});
