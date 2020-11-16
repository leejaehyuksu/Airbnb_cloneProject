import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '~/Context/User';
import Loading from '~/Screens/Loading';
import HomeScreen from '~/Screens/Home';
import SignUpScreen from '~/Screens/SignUp';
import LoginOptionScreen from '~/Screens/LoginOption';
import LoginScreen from '~/Screens/Login';
import InputEmailScreen from '~/Screens/InputEmail';
import PasswordSetScreen from '~/Screens/PasswordSet';
import InputBirthScreen from '~/Screens/InputBirth';
import MapScreen from '~/Screens/Map';
import { CardStyleInterpolators } from '@react-navigation/stack';
import MainScreen from '~/Screens/Main';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{
                title: '',
                headerTransparent: true,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name='LoginOption' component={LoginOptionScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name='InputEmail' component={InputEmailScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name="PasswordSet" component={PasswordSetScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name="InputBirth" component={InputBirthScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name="Main" component={MainScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
            <Stack.Screen name="Map" component={MapScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }} />
        </Stack.Navigator>

    );
};

export default () => {
    const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

    if (isLoading === true) {
        return <Loading />;
    }
    return (
        <NavigationContainer>
            <HomeNavigator></HomeNavigator>
        </NavigationContainer>
    );
};