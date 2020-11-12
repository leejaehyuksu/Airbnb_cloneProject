import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '~/Context/User';
import Loading from '~/Screens/Loading';
import HomeScreen from '~/Screens/Main';
import SignUpScreen from '~/Screens/SignUp';
import LoginOptionScreen from '~/Screens/LoginOption';
import LoginScreen from '~/Screens/Login';
import InputEmailScreen from '~/Screens/InputEmail';
import PasswordSetScreen from '~/Screens/PasswordSet';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{
                title: '',
                headerTransparent: true,
            }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
            }} />
            <Stack.Screen name='LoginOption' component={LoginOptionScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
            }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
            }} />
            <Stack.Screen name='EmailInput' component={InputEmailScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
            }} />
            <Stack.Screen name="PasswordSet" component={PasswordSetScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
            }} />
        </Stack.Navigator>
    );
};

export default () => {
    // const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

    // if (isLoading === false) {
    //     return <Loading />;
    // }
    return (
        <NavigationContainer>
            <MainNavigator></MainNavigator>
        </NavigationContainer>
    );
};