import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { appStyle } from "../../services/appStyles/style";

const Container = ({
    onPress,
    imageSource,
    imgstyle,

}) => {
    return (
        <View style={appStyle.paymentV}>
            <TouchableOpacity
                onPress={onPress}>
                <View style={appStyle.imgcontainer}>
                    <Image source={imageSource} style={imgstyle} />
                </View>
            </TouchableOpacity>
        </View>
    )
};
export default Container;