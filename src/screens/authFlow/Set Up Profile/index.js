import React, { useState } from "react";
import { ActivityIndicator, ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appIcons } from "../../../services/assets";
import { appStyle } from "../../../services/appStyles/style";
import Header from "../../../components/Header";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomTextInput from "../../../components/TextInput";
import CustomButton from "../../../components/Button";
import AppNavigation from "../../../navigation/appNavigation";
import { colors } from "../../../services/colors";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { fontsizes } from "../../../services/sizes";


const SetupProfile = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleMileage, setVehicleMileage] = useState('');
    const [loading, setLoading] = useState(false)


    const handleSetupScreen = async () => {
        if (!firstName || !lastName || !birthday || !vehicleMake || !vehicleModel || !vehicleYear || !vehicleColor || !vehicleMileage) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        try {
            setLoading(true);
            const userId = auth().currentUser.uid; // Get the current user's ID
            const userEmail = auth().currentUser.email; // Get the current user's Email
            await firestore()
                .collection('data')
                .doc(userId)
                .set({
                    userId: userId,
                    email: userEmail,
                    firstName,
                    lastName,
                    birthday,
                    vehicleMake,
                    vehicleModel,
                    vehicleYear,
                    vehicleColor,
                    vehicleMileage,
                });

            setLoading(false);
            navigation.navigate(AppNavigation);
        } catch (error) {
            console.error('Error storing user profile data:', error.message);
            Alert.alert('Error', 'Failed to store user profile data. Please try again.');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={appIcons.Background} style={appStyle.backGroundImg1}
            >
                <Header
                    // isVisible={true}
                    headertext={"Set Up Your Profile"}
                    headermarginLeft={responsiveWidth(28)}
                    headFontSize={fontsizes.F9}
                />
                <ScrollView style={{ flex: 1 }} >
                    <View style={{ marginTop: responsiveHeight(3), alignItems: 'center' }}>
                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput1}
                            firstT="First Name"
                            placeholder="Mick"
                            keyboardType="default"
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)} />

                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput1}
                            firstT="Last Name"
                            placeholder="Tason"
                            keyboardType="default"
                            value={lastName}
                            onChangeText={(text) => setLastName(text)} />

                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput1}
                            firstT="Birthday"
                            placeholder="09 / 08 / 1996"
                            keyboardType="numeric"
                            value={birthday}
                            onChangeText={(text) => setBirthday(text)}
                            showCalendarImage={true}
                        />

                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput2}
                            firstT="Vehicle Make"
                            placeholder="Enter the make of your Vehicle"
                            keyboardType="default"
                            value={vehicleMake}
                            onChangeText={(text) => setVehicleMake(text)} />

                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput2}
                            firstT="Vehicle Model"
                            placeholder="Enter model of your Vehicle"
                            keyboardType="default"
                            value={vehicleModel}
                            onChangeText={(text) => setVehicleModel(text)} />

                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput2}
                            firstT="Vehicle Year"
                            placeholder="Enter year of your Vehicle"
                            keyboardType="numeric"
                            value={vehicleYear}
                            onChangeText={(text) => setVehicleYear(text)} />

                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput2}
                            firstT="Vehicle Color"
                            placeholder="Enter color of your Vehicle"
                            keyboardType="default"
                            value={vehicleColor}
                            onChangeText={(text) => setVehicleColor(text)} />

                        <CustomTextInput
                            containerStyle={appStyle.inputContainer}
                            firstTstyle={appStyle.InputT1}
                            style={appStyle.profileInput2}
                            firstT="Vehicle Mileage"
                            placeholder="If unknown enter approximate"
                            keyboardType="default"
                            value={vehicleMileage}
                            onChangeText={(text) => setVehicleMileage(text)} />

                        {loading && (
                            <View style={appStyle.lodingContainer}>
                                <ActivityIndicator size="large" color="#FFFFC8" />
                            </View>
                        )}
                        <CustomButton
                            onPress={() => handleSetupScreen()}
                            colors={[colors.color4, colors.color6]}
                            btnstyle={[appStyle.lgBtnContainer, { marginTop: (responsiveHeight(4)) }]}
                            Tstyle={appStyle.loginbtnT}
                            buttontext={"DONE"} />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};
export default SetupProfile;