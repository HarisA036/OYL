import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "../../../services/appStyles/style";
import { colors } from "../../../services/colors";
import CustomTextInput from "../../../components/TextInput";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { appIcons } from "../../../services/assets";
import CustomButton from "../../../components/Button";
import CustomModal from "../../../components/Modal";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const VehicleInfo = ({ navigation }) => {

    const [vehicleMake, setVehicleMake] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [vehicleYear, setVehicleYear] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehicleMileage, setVehicleMileage] = useState("");
    const [checked, setChecked] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false); // New state to track modal visibility
    const [activeModal, setActiveModal] = useState(null);
    const [vehicleData, setVehicleData] = useState({
        make: "",
        model: "",
        year: "",
        color: "",
        mileage: "",
    });

    const handleCheckboxPress = () => {
        setChecked((prevChecked) => !prevChecked); // Toggle the state of the checkbox
    };
    const handleCloseModal = () => {
        setModalVisible(false);
    }
    const handleOpenModal = () => {
        setActiveModal("vehicle");
        setModalVisible(true);
    }

    const validateFields = () => {
        const { make, model, year, color, mileage } = vehicleData;
        if (
            !vehicleYear ||
            !vehicleMake ||
            !vehicleModel ||
            !vehicleColor ||
            !vehicleMileage
        ) {
            Alert.alert('Error', 'Please fill in all fields.');
            return false;
        }
        return (
            make && model && year && color && mileage || checked
        );
    };

    const handleAddButtonPress = () => {
        if (!validateFields()) {
            Alert.alert('Error', 'Please fill in all fields or check the box to pull info from the profile.');
            return;
        }
        handleOpenModal();
    };

    useEffect(() => {
        if (checked) {
            fetchDataFromFirestore();
        } else {
            // If unchecked, clear the state values
            setVehicleMake('');
            setVehicleModel('');
            setVehicleYear('');
            setVehicleColor('');
            setVehicleMileage('');
        }
    }, [checked]);// Only fetch data when checked changes

    const fetchDataFromFirestore = async () => {
        try {
            const userId = auth().currentUser.uid;
            const doc = await firestore().collection('data').doc(userId).get();
            if (doc.exists) {
                const data = doc.data();
                setVehicleMake(data.vehicleMake || '');
                setVehicleModel(data.vehicleModel || '');
                setVehicleYear(data.vehicleYear || '');
                setVehicleColor(data.vehicleColor || '');
                setVehicleMileage(data.vehicleMileage || '');
            } else {
                Alert.alert('Error', 'Data not found in Firestore.');
            }
        } catch (error) {
            console.error('Error fetching data from Firestore:', error);
            Alert.alert('Error', 'Failed to fetch data from Firestore. Please try again.');
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.color4, flex: 1 }}>
            <View style={appStyle.homeHeaderV}>
                <Text style={appStyle.homeHT}>Vehicle Info</Text>
            </View>
            <Text style={appStyle.homeT2}>Please Enter Details</Text>
            <ScrollView>
                <View style={{ marginTop: responsiveHeight(1) }}>
                    <CustomTextInput
                        containerStyle={appStyle.vehiclecontainer}
                        firstT={"Vehicle Year"}
                        firstTstyle={appStyle.vehicleFT}
                        style={appStyle.vehicleinput}
                        placeholder={"Enter the year of your Vehicle"}
                        placeholderTextColor={colors.color23}
                        keyboardType={"numeric"}
                        value={vehicleYear}
                        onChangeText={(text) => setVehicleYear(text)} />

                    <CustomTextInput
                        containerStyle={appStyle.vehiclecontainer}
                        firstT={"Vehicle Make"}
                        firstTstyle={appStyle.vehicleFT}
                        style={appStyle.vehicleinput}
                        placeholder={"Enter make of your Vehicle"}
                        placeholderTextColor={colors.color23}
                        keyboardType={"default"}
                        value={vehicleMake}
                        onChangeText={(text) => setVehicleMake(text)} />

                    <CustomTextInput
                        containerStyle={appStyle.vehiclecontainer}
                        firstT={"Vehicle Model"}
                        firstTstyle={appStyle.vehicleFT}
                        style={appStyle.vehicleinput}
                        placeholder={"Enter model of your Vehicle"}
                        placeholderTextColor={colors.color23}
                        keyboardType={"numeric"}
                        value={vehicleModel}
                        onChangeText={(text) => setVehicleModel(text)} />

                    <CustomTextInput
                        containerStyle={appStyle.vehiclecontainer}
                        firstT={"Vehicle Color"}
                        firstTstyle={appStyle.vehicleFT}
                        style={appStyle.vehicleinput}
                        placeholder={"Enter color of your Vehicle"}
                        placeholderTextColor={colors.color23}
                        keyboardType={"default"}
                        value={vehicleColor}
                        onChangeText={(text) => setVehicleColor(text)} />

                    <CustomTextInput
                        containerStyle={appStyle.vehiclecontainer}
                        firstT={"Vehicle Mileage"}
                        firstTstyle={appStyle.vehicleFT}
                        style={appStyle.vehicleinput}
                        placeholder={"If unknown enter approximate"}
                        placeholderTextColor={colors.color23}
                        keyboardType={"numeric"}
                        value={vehicleMileage}
                        onChangeText={(text) => setVehicleMileage(text)} />
                </View>
                <View style={appStyle.policyMainV}>
                    <TouchableOpacity
                        onPress={handleCheckboxPress} >
                        <Image source={checked ? appIcons.Tick : appIcons.TickBox} style={appStyle.boxContainer} />
                    </TouchableOpacity>
                    <Text style={appStyle.pullInfo}>Pull info from profile here</Text>
                </View>

                <CustomButton
                    colors={[colors.color24, colors.color5]}
                    btnstyle={[appStyle.lgBtnContainer, { marginTop: responsiveHeight(2) }]}
                    onPress={handleAddButtonPress}
                    buttontext={"ADD"}
                    Tstyle={appStyle.vehiclebtnT}
                />
                <CustomModal
                    isVisible={isModalVisible}
                    vehicleModal={activeModal === "vehicle"}
                    closeModal={handleCloseModal}
                />
            </ScrollView>
        </SafeAreaView >
    )
};
export default VehicleInfo;