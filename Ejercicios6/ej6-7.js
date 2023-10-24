import { useState } from "react";
import { Button, View, StyleSheet, Image, Text, TextInput } from "react-native";

export default function App() {
    const [allUsers, setAllUsers] = useState([]);
    const [userGitHub, setUserGitHub] = useState({});
    const [userName, setUserName] = useState("");
    const [position, setPosition] = useState();

    const getData = async () => {
        try {
            let apiUrl = `https://api.github.com/search/users?q=${userName}`;
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                setAllUsers(data.items);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getMostrarData = () => {
        setUserGitHub(allUsers[position]);
    };
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: userGitHub.avatar_url }}
                style={styles.images}
            />
            <Text>{userGitHub.login}</Text>
            <Text>{userGitHub.id}</Text>
            <TextInput
                defaultValue=""
                placeholder="nombre"
                onChangeText={(newText) => setUserName(newText)}
            ></TextInput>
            <Button onPress={() => getData()} title="Buscar Perfil!"></Button>
            <TextInput
                defaultValue=""
                placeholder="numero"
                onChangeText={(newText) => setPosition(newText)}
            ></TextInput>
            <Button onPress={() => getMostrarData()} title="Mostrar Perfil!" />
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
