import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function App() {
    const [textDni, setTextDni] = useState("");
    const [textNombre, setTextNombre] = useState("");
    const [myArray, setMyArray] = useState([]);

    const handleOnPress = () => {
        if (textDni === "" || textNombre === "")
            return alert("No se ha escrito nada");
        //Comprobacion de errores...

        let newArray = [...myArray];
        newArray.push({ dni: textDni, nombre: textNombre });
        setMyArray(newArray);
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>DNI</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta tu texto..."
                onChangeText={(newText) => setTextDni(newText)}
                defaultValue=""
            />
            <Text style={{ fontSize: 40 }}>Nombre</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Inserta tu texto..."
                onChangeText={(newText) => setTextNombre(newText)}
                defaultValue=""
            />
            {myArray.map((element, index) => (
                <Text key={index.toString()}>
                    {`${element.nombre} / ${element.dni}`}
                </Text>
            ))}
            <Button title="Pulsa" onPress={() => handleOnPress()} />
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
