import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "../../../components/TextInput";
import { appStyle } from "../../../services/appStyles/style";
import { colors } from "../../../services/colors";
import { appIcons } from "../../../services/assets";
import CustomButton from "../../../components/Button";
import { responsiveHeight } from "react-native-responsive-dimensions";
import Account from "../Account";
import { useNavigation } from "@react-navigation/native";
import Home from "../Home";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CustomBottumTab from "../../../components/BottomTab";
import AppNavigation from "../../../navigation/appNavigation";


const EditProfile = () => {

    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleMileage, setVehicleMileage] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchDataFromFirestore();
    }, []);

    const fetchDataFromFirestore = async () => {
        try {
            setLoading(true);
            const userId = auth().currentUser.uid;
            const doc = await firestore().collection('data').doc(userId).get();
            if (doc.exists) {
                const data = doc.data();
                setFirstName(data.firstName || '');
                setLastName(data.lastName || '');
                setBirthday(data.birthday || '');
                setVehicleMake(data.vehicleMake || '');
                setVehicleModel(data.vehicleModel || '');
                setVehicleYear(data.vehicleYear || '');
                setVehicleColor(data.vehicleColor || '');
                setVehicleMileage(data.vehicleMileage || '');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data from Firestore:', error);
        }
    };

    const handleSaveChanges = async () => {
        try {
            setLoading(true);
            const userId = auth().currentUser.uid;
            await firestore().collection('data').doc(userId).update({
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
        } catch (error) {
            Alert.alert('Error', 'Failed to Updating data to Database. Please try again.');
        }
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    source={appIcons.Background}
                    style={appStyle.backGroundImg1} >
                    <View style={appStyle.headerContainer2}>
                        <StatusBar
                            backgroundColor={'white'}
                            barStyle='dark-content' />
                        <TouchableOpacity
                            onPress={() => navigation.goBack(Account)}  >
                            <Image
                                source={appIcons.Arrow} style={[appStyle.arrowStyle, { tintColor: colors.color1 }]} />
                        </TouchableOpacity>
                        <Text style={appStyle.headerText2}>Edit Profile</Text>
                    </View>
                    <ScrollView style={{ flexGrow: 1 }} >
                        {loading && (
                            <View style={appStyle.lodingContainer}>
                                <ActivityIndicator size="large" color="#FFFFC8" />
                            </View>
                        )}
                        <View style={{ alignItems: 'center' }}>
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
                                showCalendarImage={true} />

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
                        </View>
                        <CustomButton
                            onPress={handleSaveChanges}
                            colors={[colors.color4, colors.color6]}
                            btnstyle={[appStyle.lgBtnContainer, { marginTop: (responsiveHeight(3)) }]}
                            Tstyle={appStyle.loginbtnT}
                            buttontext={"SAVE CHANGES"}
                        />
                    </ScrollView>
                    <CustomBottumTab />
                </ImageBackground>
            </SafeAreaView>
        </>

    );
};
export default EditProfile;