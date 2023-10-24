import { useState } from "react";
import { Button, View, StyleSheet, Image, Text } from "react-native";

export default function App() {
    const [usersGitHub, setUsersGitHub] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(
                "https://api.github.com/search/users?q=David"
            );
            if (response.ok) {
                const data = await response.json();
                setUsersGitHub(data.items[0]);
                console.log(data.items[0]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: usersGitHub.avatar_url }}
                style={styles.images}
            />
            <Text>{usersGitHub.login}</Text>
            <Text>{usersGitHub.id}</Text>
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
    images: {
        height: 300,
        width: 300,
    },
});
