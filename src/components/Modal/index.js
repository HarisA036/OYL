import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Modal, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { appStyle } from "../../services/appStyles/style";
import { appIcons } from "../../services/assets";
import CustomButton from "../Button";
import { colors } from "../../services/colors";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import Pricing from "../../screens/appFlow/Pricing";

const CustomModal = ({

    locationModal,
    vehicleModal,
    paymentModal,
    paymentsuccesful,
    OilModal,
    isVisible,
    closeModal,
    onSaveButtonPress,
    onPressContinue,
    updateOilType,
    value,
    onChangeText,
    visible,

}) => {

    const navigation = useNavigation();
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [mm, setMM] = useState("");
    const [yy, setYY] = useState("");
    const [cvv, setCVV] = useState("");
    const [dateScheduled, setDateScheduled] = useState(null);

    useEffect(() => {
        // Calculate the next date
        const currentDate = new Date();
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 1); // Change +1 to the desired number of days
        setDateScheduled(nextDate.toDateString());
    }, []);
    

    if (locationModal) {
        return (
            <Modal
                transparent={true}
                visible={isVisible}
                animationType='slide'
                onRequestClose={closeModal}
            >
                <View style={appStyle.centeredView}>
                    <View style={appStyle.modalView}>
                        <View style={appStyle.imageV}>
                            <Image
                                source={appIcons.LocationModal} style={appStyle.locationimg} />
                        </View>
                        <Text style={appStyle.locationmodalT}>Add Location</Text>
                        <View style={appStyle.searchTIV}>
                            <TextInput
                                style={appStyle.searchInput}
                                placeholder="Search here"
                                placeholderTextColor={colors.color25}
                                keyboardType="default"
                                value={value}
                                onChangeText={(text) => { onChangeText(text); }}
                            />
                        </View>
                        <CustomButton
                            colors={[colors.color17, colors.color5]}
                            btnstyle={appStyle.submitbtn}
                            buttontext={"Submit"}
                            Tstyle={appStyle.btnText2}
                            onPress={closeModal}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
    else if (vehicleModal) {
        return (
            <Modal
                transparent={false}
                isVisible={isVisible}
                animationType='slide'
                onRequestClose={closeModal}
            >
                <View style={appStyle.vehiclemodalV}>
                    <View style={appStyle.vehicleinnerV}>
                        <ImageBackground source={appIcons.Background} style={appStyle.vehiclebg} >
                            <Image source={appIcons.CheckIcon} style={appStyle.vehiclemodalicon} />
                            <Text style={appStyle.vehiclemodalT}>Vehicle has been added successfully! One step left!</Text>
                            <CustomButton
                                buttontext={"CONTINUE"}
                                onPress={() => navigation.navigate(Pricing)}
                                colors={[colors.color4, colors.color1]}
                                Tstyle={appStyle.loginbtnT}
                                btnstyle={[appStyle.loginBtn, { marginTop: responsiveScreenHeight(3) }]} />
                        </ImageBackground>
                    </View>
                </View>
            </Modal>
        );
    }

    else if (OilModal) {
        return (
            <Modal
                transparent={true}
                visible={visible}
                animationType='slide'
                onRequestClose={closeModal}
            >
                <View style={appStyle.centeredView}>
                    <View style={appStyle.oilModal}>
                        <View style={appStyle.vehiclecontainer2}>
                            <Text style={appStyle.vehicleFT}>Oil type</Text>
                            <Text style={appStyle.oilTypetxt}>Please select Oil type from here</Text>
                            <Text style={appStyle.oilTypetxt2}>(All Oil High Quality Synthetic)</Text>
                            <Image
                                source={appIcons.DownArrow} style={appStyle.visibilityIcon} />
                        </View>
                        <View style={appStyle.oilInnerModal}>
                            <TouchableWithoutFeedback onPress={() => {
                                updateOilType("Manufacturers Recommendation");
                            }}>
                                <View style={appStyle.oilV1}>
                                    <Text style={appStyle.oilModalT}>Manufacturers Recommendation</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <View style={appStyle.oilV1}>
                                <Text style={appStyle.oilModalT2}>------- OR -------</Text>
                            </View>

                            <TouchableWithoutFeedback onPress={() => {
                                updateOilType("0W-20");
                            }}>
                                <View style={appStyle.oilV1}>
                                    <Text style={appStyle.oilModalT}>0W-20</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => {
                                updateOilType("5W-20");
                            }}>
                                <View style={appStyle.oilV1}>
                                    <Text style={appStyle.oilModalT}>5W-20</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => {
                                updateOilType("5W-30");
                            }}>
                                <View style={appStyle.oilV1}>
                                    <Text style={appStyle.oilModalT}>5W-30</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => {
                                updateOilType("10W-30");
                            }}>
                                <View style={appStyle.oilV1}>
                                    <Text style={appStyle.oilModalT}>10W-30</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => {
                                updateOilType("10W-40");
                            }}>
                                <View style={appStyle.oilV2}>
                                    <Text style={appStyle.oilModalT}>10W-40</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }

    else if (paymentsuccesful) {
        return (
            <Modal
                transparent={false}
                isVisible={isVisible}
                animationType='none'
                onRequestClose={closeModal} >
                <View style={appStyle.vehiclemodalV}>
                    <View style={appStyle.vehicleinnerV}>
                        <ImageBackground source={appIcons.Background} style={appStyle.vehiclebg}>
                            <Image source={appIcons.CheckIcon} style={appStyle.vehiclemodalicon} />
                            <Text style={appStyle.pricemodalT1}>Congratulations!</Text>
                            <Text style={appStyle.pricemodalT2}>We will see you on </Text>
                            <Text style={appStyle.pricemodalT3}>{dateScheduled}</Text>
                            <CustomButton
                                buttontext={"CONTINUE"}
                                onPress={onPressContinue}
                                colors={[colors.color4, colors.color1]}
                                Tstyle={appStyle.loginbtnT}
                                btnstyle={[appStyle.loginBtn, { marginTop: responsiveScreenHeight(3) }]} />
                        </ImageBackground>
                    </View>
                </View>
            </Modal>
        );
    }

    else if (paymentModal) {
        return (
            <Modal
                transparent={true}
                visible={isVisible}
                animationType='none'
                onRequestClose={closeModal}>
                <View style={appStyle.centeredView}>
                    <View style={appStyle.paymentmodal}>
                        <View style={appStyle.paymenticonV}>
                            <Image
                                source={appIcons.PaymentIcon} style={appStyle.paymenticonimg} />
                        </View>
                        <Text style={appStyle.paymentmodalT1}>Add New Details</Text>
                        <Text style={appStyle.paymentmodalT2}>Please enter your Payment Details</Text>
                        <View style={appStyle.detailmainV}>
                            <View style={[appStyle.paymentinputC, { marginTop: responsiveScreenHeight(3) }]}>
                                <TextInput
                                    style={appStyle.paymentinputT}
                                    placeholder="Card holder name"
                                    placeholderTextColor={colors.color3}
                                    keyboardType="default"
                                    onChangeText={(text) => setCardHolderName(text)}
                                    value={cardHolderName} />
                            </View>
                            <View style={appStyle.paymentinputC}>
                                <TextInput
                                    style={appStyle.paymentinputT}
                                    placeholder="Number of card"
                                    placeholderTextColor={colors.color3}
                                    keyboardType="numeric"
                                    maxLength={19}
                                    onChangeText={(text) => setCardNumber(text)}
                                    value={cardNumber} />
                            </View>
                            <Text style={appStyle.simpleT}>VALID THRU</Text>
                            <View style={appStyle.validView}>
                                <View style={appStyle.cardInputDetails}>
                                    <TextInput
                                        style={appStyle.paymentinputT}
                                        placeholder="MM"
                                        keyboardType="numeric"
                                        value={mm}
                                        onChangeText={setMM}
                                        maxLength={2}
                                    />
                                </View>
                                <View style={appStyle.cardInputDetails}>
                                    <TextInput
                                        style={appStyle.paymentinputT}
                                        placeholder="YY"
                                        keyboardType="numeric"
                                        value={yy}
                                        onChangeText={setYY}
                                        maxLength={2}
                                    />
                                </View>
                                <View style={appStyle.cardInputDetails}>
                                    <TextInput
                                        style={appStyle.paymentinputT}
                                        placeholder="CVV"
                                        keyboardType="numeric"
                                        value={cvv}
                                        onChangeText={setCVV}
                                        maxLength={3}
                                    />
                                </View>
                            </View>
                        </View>
                        <CustomButton
                            colors={[colors.color17, colors.color5]}
                            btnstyle={appStyle.submitbtn}
                            buttontext={"Save"}
                            Tstyle={appStyle.btnText2}
                            onPress={onSaveButtonPress} />
                    </View>
                </View>
            </Modal>
        );
    };
};
export default CustomModal;