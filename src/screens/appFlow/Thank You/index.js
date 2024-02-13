import React from "react";
import { Image, ImageBackground, StatusBar, Text, View } from "react-native";
import { colors } from "../../../services/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { appIcons } from "../../../services/assets";
import CustomButton from "../../../components/Button";
import { appStyle } from "../../../services/appStyles/style";
import { useNavigation } from "@react-navigation/native";
import Home from "../Home";

const ThankYou = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <View style={appStyle.upperV}>
                <View style={appStyle.circleOuterV}>
                    <View style={appStyle.circleInnverV}>
                        <Image source={appIcons.Thumbsup} style={appStyle.thumbsimg} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ImageBackground source={appIcons.Background} style={appStyle.backGroundImg1}  >
                    <View style={appStyle.centerV}>
                        <Text style={appStyle.thnkxT1}>Thank You!</Text>
                        <Text style={appStyle.thnkxT2}>Thanks for using our app, We hope you like it and use it again.</Text>
                    </View>
                    <View style={appStyle.logoV}>
                        <Image source={appIcons.FbLogo} />
                        <Image source={appIcons.InstaLogo} style={{ marginLeft: responsiveWidth(4) }} />
                    </View>
                    <CustomButton
                        onPress={() => navigation.navigate(Home)}
                        colors={[colors.color1, colors.color4]}
                        btnstyle={appStyle.thnkxbtn}
                        Tstyle={appStyle.thnkxT}
                        buttontext={"Go Home"}
                    />
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
};
export default ThankYou;