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
    const audios = [
        require(rutaAudio + "/chh1.wav"),
        require(rutaAudio + "/chh2.wav"),
        require(rutaAudio + "/chh3.wav"),
        require(rutaAudio + "/chh4.wav"),
        require(rutaAudio + "/dr_tb_1.wav"),
        require(rutaAudio + "/dr_tb_2.wav"),
        require(rutaAudio + "/dr_tb_3.wav"),
        require(rutaAudio + "/dr_tb_4.wav"),
        require(rutaAudio + "/kk1.wav"),
        require(rutaAudio + "/kk2.wav"),
        require(rutaAudio + "/kk3.wav"),
        require(rutaAudio + "/lo-fi-cow.wav"),
        require(rutaAudio + "/sn1.wav"),
        require(rutaAudio + "/sn2.wav"),
        require(rutaAudio + "/sn3.wav"),
        require(rutaAudio + "/sn4.wav"),
    ];

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
                                                await playLocalSound(audio)
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
