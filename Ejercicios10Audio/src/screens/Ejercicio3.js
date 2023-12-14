// Librerias instaladas:
//npm i native-base
//expo install expo-av

import { View } from "react-native";
import { useState, useEffect } from "react";
import {
    Center,
    Box,
    Heading,
    VStack,
    NativeBaseProvider,
    Button,
} from "native-base";
import playLocalSound from "../services/AudioServices";

const Ejercicio3 = () => {
    const rutaAudio = "../../EnunciadoAudio/beatbox/drumkit/";
    const audios = [];

    for (let i = 0; i < 4; i++) {
        audios.push(`${rutaAudio}/chh${i + 1}.wav`);
    }
    for (let i = 0; i < 4; i++) {
        audios.push(`${rutaAudio}/dr_tb_${i + 1}.wav`);
    }
    for (let i = 0; i < 3; i++) {
        audios.push(`${rutaAudio}/kk${i + 1}.wav`);
    }
    audios.push(`${rutaAudio}/lo-fi-cow.wav`);
    for (let i = 0; i < 4; i++) {
        audios.push(`${rutaAudio}/sn${i + 1}.wav`);
    }

    // useEffect(() => {
    //     return sound
    //         ? () => {
    //               console.log("Unloading Sound");
    //               sound.unloadAsync();
    //           }
    //         : undefined;
    // }, [sound]);

    return (
        <NativeBaseProvider>
            <Center w="80%">
                <Box safeArea p="2" w="90%" maxW="290" py="5">
                    <Heading
                        size="lg"
                        color="coolGray.800"
                        _dark={{ color: "warmGray.50" }}
                        fontSize="50"
                        fontWeight="semibold"
                    >
                        Beat Box
                    </Heading>
                    <VStack space={3} mt="5">
                        <View
                            style={{ flexDirection: "row", flexWrap: "wrap" }}
                        >
                            {audios.map((audio, index) => {
                                console.log("hola");
                                return (
                                    <View style={{ padding: 3 }} key={index}>
                                        <Button
                                            onPress={async () =>
                                                await playLocalSound(
                                                    require(audio.toString())
                                                )
                                            }
                                            size="20"
                                            mt="-1"
                                            colorScheme="blue"
                                        >
                                            {" "}
                                        </Button>
                                    </View>
                                );
                            })}
                        </View>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>
    );
};
export default Ejercicio3;
