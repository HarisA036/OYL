import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "../../../services/assets";
import { appStyle } from "../../../services/appStyles/style";
import TextComponent from "../../../components/Text";
import Account from "../Account";
import Header from "../../../components/Header";
import { fontsizes } from "../../../services/sizes";
import { responsiveWidth } from "react-native-responsive-dimensions";

const TermsOfService = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={appIcons.Background}  style={appStyle.backGroundImg1} >                
                    <Header
                        isVisible={true}
                        onPress={() => navigation.goBack(Account)}
                        headertext={"Terms of Service"}
                        headFontSize={fontsizes.F8}
                        headermarginLeft={responsiveWidth(22)}
                         />
                    <ScrollView>
                        <TextComponent  />
                    </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};
export default TermsOfService;