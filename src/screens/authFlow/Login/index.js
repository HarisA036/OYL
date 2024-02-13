import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, ImageBackground, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appIcons } from '../../../services/assets';
import SignUp from '../Create Account';
import CustomButton from '../../../components/Button';
import { colors } from '../../../services/colors';
import { appStyle } from '../../../services/appStyles/style';
import CustomTextInput from '../../../components/TextInput';
import auth from '@react-native-firebase/auth';
import AppNavigation from '../../../navigation/appNavigation';


const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState("");
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {

        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        try {
            setLoading(true);
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('logged in successfully:');
            navigation.navigate(AppNavigation)
        } catch (error) {
            Alert.alert('Error', 'Invalid email or password. Please try again.');
            setLoading(false);
        }
    };

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={'black'}
                barStyle={'light-content'} />
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={appStyle.backGroundImg1}    >
                <ScrollView>
                    <Image
                        source={appIcons.Logo} style={appStyle.logo} />
                    <Text style={appStyle.loginText}>Enter Email and Password to log in!</Text>

                    <CustomTextInput
                        containerStyle={appStyle.loginV}
                        firstT={"Email"}
                        firstTstyle={appStyle.loginVText}
                        style={appStyle.loginInput}
                        placeholder={"micktason@email.com"}
                        placeholderTextColor={'#222222'}
                        keyboardType={"default"}
                        onChangeText={(text) => setEmail(text)}
                        value={email} />
                    <View style={appStyle.loginV}>
                        <Text style={appStyle.loginVText}>Password</Text>
                        <TextInput
                            style={appStyle.loginInput}
                            placeholder='• • • • • • • • • • • • • • •'
                            placeholderTextColor={'#222222'}
                            secureTextEntry={!passwordVisible}
                            onChangeText={(text) => setPassword(text)}
                            value={password} />
                        <View style={appStyle.visibilityButtonV}>
                            <TouchableOpacity
                                onPress={togglePasswordVisibility}>
                                {passwordVisible ? (
                                    <Image source={appIcons.EyeIcon} />
                                ) : (
                                    <Image source={appIcons.EyeIcon} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={appStyle.loginT2}>
                        <Text style={appStyle.dontAcc}>Do not have an account? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(SignUp)}>
                            <Text style={appStyle.createAcc}>Create</Text>
                        </TouchableOpacity>
                    </View>
                    <CustomButton
                        onPress={handleLogin}
                        colors={[colors.color4, colors.color6]}
                        btnstyle={appStyle.loginBtn}
                        Tstyle={appStyle.loginbtnT}
                        buttontext={"LUBE ME UP!"} />
                    {loading &&
                        <ActivityIndicator size="large" color={colors.color1}
                            style={appStyle.loadingIndicator}
                        />}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};
export default Login;