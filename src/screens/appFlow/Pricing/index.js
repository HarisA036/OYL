import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { appStyle } from "../../../services/appStyles/style";
import { appIcons } from "../../../services/assets";
import Container from "../../../components/Container";
import VehicleInfo from "../Vehicle Info";
import CustomModal from "../../../components/Modal";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";

const Pricing = ({ navigation }) => {

    const [isPaymentMethodVisible, setPaymentMethodVisible] = useState(false);
    const [isPaymentSuccessfulVisible, setPaymentSuccessfulVisible] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [mm, setMM] = useState("");
    const [yy, setYY] = useState("");
    const [cvv, setCVV] = useState("");

    const handleSaveButtonPress = () => {
        setActiveModal("paymentsuccess");
        setPaymentMethodVisible(false);
        setPaymentSuccessfulVisible(true);
    };
    const handleModalOpen = () => {
        setActiveModal("payment");
        setPaymentMethodVisible(true);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                isVisible={true}
                headertext={"Select Price & Payment Method"}
                headermarginLeft={responsiveWidth(12)}
                headFontSize={responsiveFontSize(2)}
                onPress={() => navigation.navigate(VehicleInfo)}
            />
            <ImageBackground style={appStyle.backGroundImg1} source={appIcons.Background}>
                <ScrollView>
                    <View style={appStyle.amountcontainer}>
                        <View style={appStyle.containerupperV}></View>
                        <Text style={appStyle.amountT1}>YOUR OYL AND FYLTER CHANGE WILL BE</Text>
                        <View style={appStyle.amountV}>
                            <Text style={appStyle.amountstyle}>$</Text>
                            <Text style={appStyle.amountstyle2}>87</Text>
                        </View>
                        <Text style={appStyle.amountT}>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES -
                            SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID AND AIR UP YOUR TIRES</Text>
                        <View style={appStyle.containerlowerV}></View>
                    </View>
                    <Text style={appStyle.paymentT}>Payment Methods</Text>

                    <View style={appStyle.marginV}>
                        <Container imageSource={appIcons.Stripe} imgstyle={appStyle.paymentimgStyle}
                            onPress={() => handleModalOpen('payment')} // Pass the modal type
                        />
                        <Container imageSource={appIcons.Android} imgstyle={appStyle.paymentimgStyle} />
                        <Container imageSource={appIcons.Apple} imgstyle={appStyle.paymentimgStyle} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Container imageSource={appIcons.Bitpay} imgstyle={appStyle.paymentimgStyle} />
                        <Container imageSource={appIcons.Affirm} imgstyle={appStyle.paymentimgStyle} />
                        <Container imageSource={appIcons.Klarna} imgstyle={appStyle.paymentimgStyle} />
                    </View>
                    <CustomModal
                        isVisible={isPaymentMethodVisible}
                        paymentModal={activeModal === "payment"} // Pass the active modal as a prop
                        onSaveButtonPress={handleSaveButtonPress}
                        nameValue={cardHolderName}
                        changenameText={(text) => setCardHolderName(text)}
                        numberValue={cardNumber}
                        changeNumberText={(text) => setCardNumber(text)}
                        mmvalue={mm}
                        changeMMText={(text) => setMM(text)}
                        yyValue={yy}
                        changeYYText={(text) => setYY(text)}
                        cvvValue={cvv}
                        changeCVVText={(text) => setCVV(text)}
                    />
                    <CustomModal
                        isVisible={isPaymentSuccessfulVisible}
                        paymentsuccesful={activeModal === "paymentsuccess"} 
                        onPressContinue={() => navigation.navigate('Account', { screen: 'ThankYou' })}
                        />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};
export default Pricing;