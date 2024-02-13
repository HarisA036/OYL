import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { appIcons } from "../../../services/assets";
import { appStyle } from "../../../services/appStyles/style";
import TextComponent from "../../../components/Text";
import Account from "../Account";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { fontsizes } from "../../../services/sizes";

const Policy = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={appIcons.Background}
                style={appStyle.backGroundImg1}
            >
                <Header
                    isVisible={true}
                    onPress={() => navigation.goBack(Account)}
                    headertext={"Privacy Policy"}
                    headFontSize={fontsizes.F8}
                        headermarginLeft={responsiveWidth(22)}
                />
                <ScrollView>
                    <TextComponent
                    />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};
export default Policy;