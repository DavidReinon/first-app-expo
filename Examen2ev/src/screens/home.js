import React from "react";
import { View, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Button
                title="Ejercicio 2"
                onPress={() => navigation.navigate("Ejercicio2")}
            />
            <Button
                title="Ejercicio 3"
                onPress={() => navigation.navigate("Ejercicio3")}
            />
            <Button
                title="Ejercicio 4"
                onPress={() => navigation.navigate("Ejercicio4")}
            />
        </View>
    );
};

export default Home;
