import React, { View, Text } from "react-native";
import { useContext } from "react";
import ScreensContext from "./ScreensContext";

export const Screen4 = () => {
    const { data } = useContext(ScreensContext);

    return (
        <View style={{ flex: 1 }}>
            {data != null && (
                <View style={{ alignItems: "center" }}>
                    <Text>{data.data[0].first_name}</Text>
                    <Text>{data.data[0].position}</Text>
                    <Text>{data.data[0].team.full_name}</Text>
                </View>
            )}
        </View>
    );
};
export default Screen4;
