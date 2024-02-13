import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/appFlow/Home';
import ThankYou from '../../screens/appFlow/Thank You';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VehicleInfo from '../../screens/appFlow/Vehicle Info';
import Pricing from '../../screens/appFlow/Pricing';
import Account from '../../screens/appFlow/Account';
import TermsOfService from '../../screens/appFlow/Terms and Conditions';
import EditProfile from '../../screens/appFlow/Edit Profile';
import { appIcons } from '../../services/assets';
import { Image } from 'react-native';
import { appStyle } from '../../services/appStyles/style';
import Policy from '../../screens/appFlow/Privacy Policy';
import { fontsizes } from '../../services/sizes';
import { colors } from '../../services/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomePage'>
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="VehicleInfo" component={VehicleInfo} />
            <Stack.Screen name="Pricing" component={Pricing} />
        </Stack.Navigator>
    );
};

const AccountScreen = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='AccountPage' options={{ tabBarVisible: false }} >
            <Stack.Screen name="AccountPage" component={Account}  />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="TermsOfService" component={TermsOfService} />
            <Stack.Screen name="Policy" component={Policy} />
            <Stack.Screen name="ThankYou" component={ThankYou} />
        </Stack.Navigator>
    );
};

const AppNavigation = () => {

    return (
        <Tab.Navigator
            initialRouteName="HomeScreen" 
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {backgroundColor: 'white'},
                tabBarActiveTintColor: '#222222',
                tabBarHideOnKeyboard: false,
                unmountOnBlur: true,
                lazy: true,
              })}
            >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        fontSize: fontsizes.F4, color: colors.color5
                    },
                    tabBarIcon: () => (
                        <Image
                            source={appIcons.HomeIcon} style={appStyle.tabBarIcon} />
                    ),
                }} />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarStyle: {display: 'none'},
                    tabBarLabelStyle: {
                        fontSize: fontsizes.F4, color: colors.color5
                    },
                    tabBarIcon: () => (
                        <Image
                            source={appIcons.AccountIcon} style={appStyle.tabBarIcon} />
                    ),
                }} />
        </Tab.Navigator>
    );
};
export default AppNavigation;