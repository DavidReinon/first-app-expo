import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>
                Modifica el contenido del componente Text para que muestre por
                pantalla una frase distinta !
            </Text>
            <Text>
                Modifica el contenido del componente Text para que muestre por
                pantalla una frase distinta !
            </Text>
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
});
