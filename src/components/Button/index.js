import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CustomButton = (
    {
        buttontext,
        onPress,
        colors,
        Tstyle,
        btnstyle,
    }) => {

    return (
        <LinearGradient
            colors={colors}
            style={btnstyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <Text style={Tstyle} >{buttontext}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
};
export default CustomButton;