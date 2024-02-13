import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { appStyle } from '../../services/appStyles/style';
import { appIcons } from '../../services/assets';
import Home from '../../screens/appFlow/Home';
import Account from '../../screens/appFlow/Account';

const CustomBottumTab = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={appStyle.line} />
            <View style={appStyle.containerA}>
                <TouchableOpacity onPress={()=> navigation.navigate(Home)}>
                    <View style={appStyle.containerB}>
                        <Image  
                        source={appIcons.HomeIcon} style={appStyle.icon}  />
                        <Text style={appStyle.tabTxt}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>  navigation.goBack(Account)}>
                <View style={appStyle.containerB}>
                    <Image
                        source={appIcons.AccountIcon}  style={appStyle.icon} />
                    <Text style={appStyle.tabTxt}>Account</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};
export default CustomBottumTab