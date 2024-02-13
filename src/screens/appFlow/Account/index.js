import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { appIcons } from "../../../services/assets";
import { appStyle } from "../../../services/appStyles/style";
import EditProfile from "../Edit Profile";
import ThankYou from "../Thank You";
import TermsOfService from "../Terms and Conditions";
import Login from "../../authFlow/Login";
import Policy from "../Privacy Policy";

const Account = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={appStyle.accModalV}>
                    <View style={appStyle.modalInnerV}>
                        <TouchableOpacity onPress={() => navigation.navigate(EditProfile)}>
                            <View style={appStyle.accountTV1}>
                                <Text style={appStyle.accountT1}>Edit Profile</Text>
                                <Image
                                    source={appIcons.RightIcon} style={appStyle.righticon} />
                            </View></TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate(ThankYou)}>
                            <View style={appStyle.accountTV1}>
                                <Text style={appStyle.accountT1}>Share Your Feedback</Text>
                                <Image source={appIcons.RightIcon} style={appStyle.righticon} />
                            </View></TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate(TermsOfService)} >
                            <View style={appStyle.accountTV1}>
                                <Text style={appStyle.accountT1}>Terms of Service</Text>
                                <Image source={appIcons.RightIcon} style={appStyle.righticon} />
                            </View></TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate(Policy)}>
                            <View style={appStyle.accountTV1}>
                                <Text style={appStyle.accountT1}>Privacy Policy</Text>
                                <Image source={appIcons.RightIcon} style={appStyle.righticon} />
                            </View></TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate(ThankYou)}>
                            <View style={appStyle.accountTV1}>
                                <Text style={appStyle.accountT1}>About Us</Text>
                                <Image source={appIcons.RightIcon} style={appStyle.righticon} />
                            </View></TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate(Login)}>
                            <View style={appStyle.accountTV2}>
                                <Text style={appStyle.accountT2}>Logout</Text>
                                <Image source={appIcons.RightIcon} style={appStyle.righticon} />
                            </View></TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};
export default Account;