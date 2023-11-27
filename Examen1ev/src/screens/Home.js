import { View, Text, Button, StyleSheet } from "react-native";

const Home = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textHome}>Home</Text>
            </View>
            <View style={styles.butons}>
                <Button
                    title="GO TO SCREEN 1"
                    onPress={() => props.navigation.navigate("Screen1")}
                ></Button>
                <Button
                    title="GO TO SCREEN 2"
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
    butons: {
        marginHorizontal: 5,
    },
    textHome: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
    },
});

export default Home;
