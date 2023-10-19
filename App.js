import { useState } from "react";
import { Button, View, StyleSheet, Image, Dimensions } from "react-native";

export default function App() {
    const [imageData1, setImageData1] = useState({});
    const [imageData2, setImageData2] = useState({});
    const screnDimension = Dimensions.get("window");

    const getData = async () => {
        try {
            const response1 = await fetch(
                "https://api.thecatapi.com/v1/images/search?size=full"
            );
            const response2 = await fetch(
                "https://api.thecatapi.com/v1/images/search?size=full"
            );
            if (response1.ok && response2.ok) {
                const data1 = await response1.json();
                const data2 = await response2.json();
                if (data1[0].height >= screnDimension.height) {
                    data1[0].height = screnDimension.height - 50;
                }
                if (data1[0].width >= screnDimension.width) {
                    data1[0].width = screnDimension.width - 20;
                }
                if (data2[0].height >= screnDimension.height) {
                    data2[0].height = screnDimension.height - 50;
                }
                if (data2[0].width >= screnDimension.width) {
                    data2[0].width = screnDimension.width - 20;
                }
                setImageData1(data1[0]);
                setImageData2(data2[0]);
                console.log(data1);
                console.log(data2);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageData1.url }}
                style={[
                    styles.image,
                    { height: imageData2.height, width: imageData2.width },
                ]}
            />
            <Image
                source={{ uri: imageData2.url }}
                style={[
                    styles.image,
                    { height: imageData2.height, width: imageData2.width },
                ]}
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
    image: {
        flex: 1,
    },
});
