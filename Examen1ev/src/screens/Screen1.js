import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Screen1 = () => {
    const [message, setMessage] = useState("");
    const [columns, setColumns] = useState("");
    const [convertedMessage, setConvertedMessage] = useState([]);

    const handlePress = () => {
        if (message && columns) {
            const cols = parseInt(columns, 10);
            const rows = Math.ceil(message.length / cols);

            let result = [];

            for (let i = 0; i < rows; i++) {
                let rowText = "";
                for (let j = 0; j < cols; j++) {
                    const index = i + j * rows;
                    if (index < message.length) {
                        rowText += message[index];
                    }
                }
                result.push(rowText);
            }

            setConvertedMessage(result);
            setMessage("");
            setColumns("");
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Mensaje"
                value={message}
                onChangeText={(text) => setMessage(text)}
            />
            <TextInput
                placeholder="Número de columnas"
                keyboardType="numeric"
                value={columns}
                onChangeText={(text) => setColumns(text)}
            />
            <Button title="Pulsa" onPress={handlePress} />
            {convertedMessage.map((row, index) => (
                <Text key={index}>{row}</Text>
            ))}
        </View>
    );
};

export default Screen1;
