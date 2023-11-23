import { View, Text, Button, StyleSheet } from "react-native";

const Home = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.margenes}>
                <Text style={styles.textoHome}>Home</Text>
            </View>
            <View style={styles.margenes}>
                <Button
                    title="Screen1"
                    onPress={() => props.navigation.navigate("Screen1")}
                ></Button>
            </View>
            <View style={styles.margenes}>
                <Button
                    title="Screen2"
                    onPress={() => props.navigation.navigate("Screen2")}
                ></Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    margenes: {
        margin: 7,
    },
    textoHome: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 5,
    },
});

export default Home;
