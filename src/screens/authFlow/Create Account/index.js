import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "../../../services/assets";
import { appStyle } from "../../../services/appStyles/style";
import Login from "../Login";
import Header from "../../../components/Header";
import SetupProfile from "../Set Up Profile";
import CustomButton from "../../../components/Button";
import { colors } from "../../../services/colors";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from "../../../components/TextInput";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { fontsizes } from "../../../services/sizes";

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleCheckboxPress = () => {

        setChecked(!checked); // Toggle the state of the checkbox
    };
    const handleSignUp = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }
        if (!checked) {
            Alert.alert('Error', 'Please accept the Terms of Service and Privacy Policy.');
            return;
        }
        try {
            setLoading(true);
            // Check if the email is already registered
            const userExists = await firestore()
                .collection('users')
                .where('email', '==', email)
                .get();

            if (!userExists.empty) {
                Alert.alert('Error', 'This email is already registered. Please use a different email address.');
                return;
            }
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const userId = userCredential.user.uid;

            await firestore()
                .collection('users')
                .doc(userId)
                .set({
                    email,
                    password,
                });
            navigation.navigate(SetupProfile);
        } catch (error) {
            Alert.alert('Error', 'Failed to create an account. Please try again.');
            setLoading(false);
        }
    };

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../../assets/images/background.png')} style={appStyle.backGroundImg1}            >
                <Header
                    onPress={() => navigation.navigate(Login)}
                    isVisible={true}
                    headertext={"Create Account"}
                    headermarginLeft={responsiveWidth(25)}
                    headFontSize={fontsizes.F8}
                />
                <ScrollView >
                    <CustomTextInput
                        containerStyle={appStyle.signUpV}
                        firstT={"Email"}
                        firstTstyle={appStyle.loginVText}
                        style={appStyle.loginInput}
                        placeholder={"micktason@email.com"}
                        placeholderTextColor={'#222222'}
                        keyboardType={"default"}
                        onChangeText={(text) => setEmail(text)}
                        value={email} />

                    <View style={appStyle.signUpV}>
                        <Text style={appStyle.InputT1}>Password</Text>
                        <TextInput
                            style={appStyle.signUpTInput}
                            placeholder='• • • • • • • • • • • • • • •'
                            placeholderTextColor={'#222222'}
                            secureTextEntry={!passwordVisible}
                            onChangeText={(text) => setPassword(text)}
                            value={password} />
                        <View style={appStyle.visibilityButtonV}>
                            <TouchableOpacity
                                onPress={togglePasswordVisibility}>
                                {passwordVisible ? (
                                    <Image source={appIcons.EyeIcon} style={appStyle.visibilityIcon}/>
                                ) : (
                                    <Image source={appIcons.EyeIcon} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={appStyle.policyMainV}>
                        <View style={{ paddingTop: responsiveHeight(0.3) }}>

                            <TouchableOpacity
                                onPress={handleCheckboxPress}>
                                {checked ? (
                                    <Image source={appIcons.Check} style={appStyle.checkedtick} />
                                ) : (
                                    <Image source={appIcons.Unchecked} style={appStyle.checkedtick} />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: responsiveHeight(0.4) }}>
                            <Text style={appStyle.policyT}>I accept the
                                <Text style={appStyle.policyBT}> Terms of Service
                                    <Text style={appStyle.policyT}> and
                                        <Text style={appStyle.policyBT}> Privacy Policy
                                        </Text>
                                    </Text>
                                </Text>
                            </Text>
                        </View>
                    </View>

                    <CustomButton
                        onPress={() => handleSignUp()}
                        colors={[colors.color4, colors.color6]}
                        btnstyle={appStyle.lgBtnContainer}
                        Tstyle={appStyle.buttonText}
                        buttontext={"Lets go!"}
                    />
                    {loading &&
                        <ActivityIndicator size="large" color={colors.color1}
                            style={appStyle.loadingIndicator}
                        />}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};
export default SignUp;