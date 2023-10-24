import { StyleSheet, Text, View, Button } from "react-native";
const LogUp = (props) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Pantalla Log Up</Text>
            <Button
                title="Back to Log In"
                onPress={() => props.navigation.navigate("Log In")}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});
export default LogUp;
