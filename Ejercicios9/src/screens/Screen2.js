import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";
import ScreensContext from "./ScreensContext";

const Screen2 = () => {
    const { data } = useContext(ScreensContext);
    const [definitionIndex, setDefinitionIndex] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            {data != null && (
                <View>
                    {
                        //Ejercicio 2:
                        /* {data[0].meanings[0].definitions.map((element, index) => {
                        return <Text key={index}>{element.definition}</Text>;
                    })} */
                    }
                    <Text>
                        {
                            data[0].meanings[0].definitions[definitionIndex]
                                .definition
                        }
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            margin: 10,
                        }}
                    >
                        <Button
                            title="Anterior"
                            onPress={() =>
                                setDefinitionIndex((lastIndex) =>
                                    lastIndex - 1 < 0
                                        ? data[0].meanings[0].definitions
                                              .length - 1
                                        : lastIndex - 1
                                )
                            }
                        ></Button>
                        <Button
                            title="Siguiente"
                            onPress={() =>
                                setDefinitionIndex((lastIndex) =>
                                    lastIndex + 1 >
                                    data[0].meanings[0].definitions.length - 1
                                        ? 0
                                        : lastIndex + 1
                                )
                            }
                        ></Button>
                    </View>
                </View>
            )}
        </View>
    );
};
export default Screen2;
