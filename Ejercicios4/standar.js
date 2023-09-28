import { StyleSheet, View } from "react-native";
export default function App() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View width={100} height={100} backgroundColor={"yellow"} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View
                    width={0}
                    height={0}
                    backgroundColor={"transparent"}
                    borderStyle={"solid"}
                    borderLeftWidth={50}
                    borderRightWidth={50}
                    borderBottomWidth={100}
                    borderLeftColor="transparent"
                    borderRightColor="transparent"
                    borderBottomColor="blue"
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View
                    width={100}
                    height={100}
                    borderRadius={100 / 2}
                    backgroundColor={"green"}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View
                    width={100}
                    height={100}
                    borderTopLeftRadius={150}
                    borderTopRightRadius={0}
                    borderBottomLeftRadius={0}
                    borderBottomRightRadius={0}
                    backgroundColor={"red"}
                />
                <View
                    width={100}
                    height={100}
                    borderTopLeftRadius={0}
                    borderTopRightRadius={150}
                    borderBottomLeftRadius={0}
                    borderBottomRightRadius={0}
                    backgroundColor={"black"}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View
                    width={100}
                    height={100}
                    borderTopLeftRadius={0}
                    borderTopRightRadius={0}
                    borderBottomLeftRadius={150}
                    borderBottomRightRadius={0}
                    backgroundColor={"black"}
                />
                <View
                    width={100}
                    height={100}
                    borderTopLeftRadius={0}
                    borderTopRightRadius={0}
                    borderBottomLeftRadius={0}
                    borderBottomRightRadius={150}
                    backgroundColor={"red"}
                />
            </View>
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
