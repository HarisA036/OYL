import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/authFlow/Login';
import SignUp from '../../screens/authFlow/Create Account';
import SetupProfile from '../../screens/authFlow/Set Up Profile';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SetupProfile" component={SetupProfile} />
        </Stack.Navigator>
    )
}
export default AuthNavigation