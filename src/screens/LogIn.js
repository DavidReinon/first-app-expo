import { StyleSheet, Text, View, Button } from "react-native";
const LogIn = (props) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Pantalla Log In</Text>
            <Button
                title="Back to Log Up"
                onPress={() => props.navigation.navigate("Log Up")}
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
export default LogIn;
