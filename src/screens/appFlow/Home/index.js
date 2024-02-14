import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { appStyle } from "../../../services/appStyles/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../services/colors";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomTextInput from "../../../components/TextInput";
import CustomButton from "../../../components/Button";
import CustomModal from "../../../components/Modal";
import VehicleInfo from "../Vehicle Info";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { appIcons } from "../../../services/assets";

const Home = ({ navigation }) => {

    const [hourSelected, setHourSelected] = useState(false);
    const [minuteSelected, setminuteSelected] = useState(false);
    const [amSelected, setAmSelected] = useState('');
    const [pmSelected, setPmSelected] = useState('');
    const [enteredHour, setEnteredHour] = useState(''); // Add this state
    const [enteredMinute, setEnteredMinute] = useState(''); // Add this state
    const [enteredLocation, setEnteredLocation] = useState(''); // Add this state
    const [selectedDateIndex, setSelectedDateIndex] = useState(null);
    const [activeModal, setActiveModal] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [oilType, setOilType] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOilModalVisible, setOilModalVisible] = useState(false);
    const padWithZero = (num) => (num < 10 ? `0${num}` : `${num}`);


    const updateSelectedLocation = (locationModal) => {
        setEnteredLocation(locationModal);
    };
    const handleHourSelect = () => {
        setHourSelected(!hourSelected);
        setminuteSelected(false);
        setEnteredHour(''); // Clear the entered hour when selecting from the squares
    };
    const handleMinuteSelect = () => {
        setminuteSelected(!minuteSelected);
        setHourSelected(false);
        setEnteredMinute(''); // Clear the entered minute when selecting from the squares
    };
    const handleAMSelect = () => {
        setAmSelected(!amSelected);
        setPmSelected(false);
    };
    const handlePMSelect = () => {
        setPmSelected(!pmSelected);
        setAmSelected(false);
    };
    const handleShowLocation = () => {
        setIsVisible(true);
        setActiveModal("location"); // Set activeModal to "location"
    };
    const handleShowOilModal = () => {
        setActiveModal("Oil");
        setOilModalVisible(true);
    };
    const handleSelectOilType = (newOilType) => {
        console.log("Oil type selected:", newOilType);
        setOilType(newOilType); // Update the selected oil type in state
        setOilModalVisible(false);
    };
    const handleCloseOilModal = () => {
        setOilModalVisible(false)
    };

    const handleEnteredHour = (text) => {
        if (text === '' || (/^\d+$/.test(text) && parseInt(text) >= 0 && parseInt(text) <= 12)) {
            const isZeroPadded = /^0\d+$/.test(text);
            setEnteredHour(isZeroPadded ? text.charAt(1) : padWithZero(text));
        } else {
            setEnteredHour('');  // Clear the state if the input is not valid
        }
    };
    const handleEnteredMinute = (text) => {
        if (text === '' || (/^\d+$/.test(text) && parseInt(text) >= 0 && parseInt(text) <= 59)) {
            const isZeroPadded = /^0\d+$/.test(text);
            setEnteredMinute(isZeroPadded ? text.charAt(1) : padWithZero(text));
        } else {
            setEnteredMinute('');  // Clear the state if the input is not valid
        }
    };
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getDateInfo = (offset) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + offset);

        const isToday = offset === 0;
        const day = isToday ? 'Today' : currentDate.toLocaleString('en-US', { weekday: 'short' });
        const date = currentDate.getDate();
        const month = currentDate.toLocaleString('en-US', { month: 'short' });
        return { day, date, month, isToday };
    };

    const handleLockIn = async () => {
        if (!selectedDateIndex || !enteredHour || !enteredMinute || !amSelected && !pmSelected || !enteredLocation || !oilType) {
            Alert.alert("Error", "Please fill in all the required fields.");
            return;
        }
        try {
            setLoading(true);
            const userId = auth().currentUser.uid; // Retrieve the user ID
            await firestore()
                .collection('Appointments')
                .doc(userId)
                .set({
                    dateIndex: selectedDateIndex,
                    hour: enteredHour,
                    minute: enteredMinute,
                    period: amSelected ? 'AM' : 'PM',
                    location: enteredLocation,
                    oilType: oilType,
                    userId: auth().currentUser.uid, // Add the user ID or any identifier for the user
                    timestamp: firestore.FieldValue.serverTimestamp(), // Optional: Add a timestamp
                });
            navigation.navigate(VehicleInfo);
        } catch (error) {
            console.error("Error saving data to Firestore:", error);
            Alert.alert("Error", "An error occurred while processing your request. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <SafeAreaView style={{ backgroundColor: colors.color4, flex: 1 }}>
            <View style={appStyle.homeHeaderV}>
                <Text style={appStyle.homeHT}>Schedule a Time</Text>
            </View>
            {loading && (
                <View style={appStyle.lodingContainer}>
                    <ActivityIndicator size="large" color="#FFFFC8" />
                </View>
            )}
            <Text style={appStyle.homeT2}>Please Enter Details</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={appStyle.scrollViewContent} >
                {Array.from({ length: 7 }).map((_, index) => {
                    const { day, date, month, isToday } = getDateInfo(index);
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedDateIndex(index)} >
                            <View style={[appStyle.squareContainer2,
                            {
                                backgroundColor: selectedDateIndex === index ? '#FFFFC8' : 'white',
                            },]}>
                                <Text style={appStyle.dayText}>{day}</Text>
                                <Text style={appStyle.dateText}>{date}</Text>
                                <Text style={appStyle.monthText}>{month}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <ScrollView >
                <Text style={appStyle.entertime}>Enter Time</Text>
                <View style={appStyle.timemainV}>
                    <View style={[appStyle.squareContainer,
                    {
                        backgroundColor: hourSelected || enteredHour !== '' ? '#FFFFC8' : colors.color4,
                    },]}>
                        <TextInput
                            style={appStyle.timestyle}
                            placeholder={"05"}
                            placeholderTextColor={'#444444CC'}
                            keyboardType={"numeric"}
                            onChangeText={handleEnteredHour}
                            value={enteredHour}
                            onPress={handleHourSelect}
                        />
                    </View>
                    <Text style={appStyle.dotstyle}>:</Text>
                    <View style={[appStyle.squareContainer, {
                        marginLeft: responsiveWidth(8),
                        backgroundColor: minuteSelected || enteredMinute !== '' ? '#FFFFC8' : colors.color4,
                    }]}>
                        <TextInput
                            style={appStyle.timestyle}
                            placeholder={"05"}
                            placeholderTextColor={'#444444CC'}
                            keyboardType={"numeric"}
                            onChangeText={handleEnteredMinute}
                            value={enteredMinute}
                            onPress={handleMinuteSelect}
                        />
                    </View>
                    <View style={appStyle.main1}>
                        <View style={[appStyle.amContainer,
                        {
                            backgroundColor: amSelected ? '#FFFFC8' : colors.color4,
                        },
                        ]}>
                            <Text style={appStyle.amTxt} onPress={handleAMSelect}>AM</Text>
                        </View>
                        <View style={[appStyle.pmContainer,
                        {
                            backgroundColor: pmSelected ? '#FFFFC8' : colors.color4,
                        },
                        ]} >
                            <Text style={appStyle.amTxt} onPress={handlePMSelect}>PM</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <CustomTextInput
                        containerStyle={appStyle.locationContainer}
                        firstTstyle={appStyle.vehicleFT}
                        firstT={"Enter Location"}
                        style={appStyle.vehicleinput}
                        placeholder={"Please enter your address"}
                        placeholderTextColor={'#444444CC'}
                        editable={false}
                        value={enteredLocation}
                        onChangeText={updateSelectedLocation}
                        showLocationImage={true}
                        onPress={handleShowLocation}
                    />
                </View>
                <View style={appStyle.vehiclecontainer}>
                    <Text style={appStyle.vehicleFT}>Oil type</Text>
                    <Text style={appStyle.oilTypetxt}>Please select Oil type from here</Text>
                    <Text style={appStyle.oilTypetxt2}>(All Oil High Quality Synthetic)</Text>
                    <View style={appStyle.visibilityButtonV}>
                        <TouchableOpacity onPress={handleShowOilModal}>
                            <Image
                                source={appIcons.DownArrow} />
                        </TouchableOpacity>
                    </View>
                </View>

                <CustomButton
                    colors={[colors.color1, colors.color1]}
                    btnstyle={[appStyle.lgBtnContainer, { marginTop: responsiveHeight(3) }]}
                    buttontext={"Lock it in!"}
                    Tstyle={appStyle.loginbtnT}
                    onPress={handleLockIn}
                />
                {/* <CustomModal
                    OilModal={activeModal === "location"}
                    isVisible={isOilModalVisible}
                /> */}
                <CustomModal
                    OilModal={activeModal === "Oil"}
                    visible={isOilModalVisible}
                    closeModal={handleCloseOilModal}
                    updateOilType={handleSelectOilType}
                />
            </ScrollView>
        </SafeAreaView >
    );
};
export default Home;