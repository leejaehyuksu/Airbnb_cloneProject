import * as React from 'react';
import Styled from 'styled-components/native';
import FacebookLoginBtn from '~/Components/Button/FacebookLoginBtn';
import SignUpBtn from '~/Components/Button/SignUpBtn';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '~/Screens/SignUp';
import Icon from 'react-native-vector-icons/Ionicons';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;
const FacebookBtn = Styled(FacebookLoginBtn)`
    margin-top : 60%;
`;

const GoogleBtn = Styled(FacebookLoginBtn)`
    margin-top : 0%;

`;

const SignBtn = Styled(SignUpBtn)`
    margin-top : 0%;
    backgroundColor: #008388;
    color: white;
`;
const GoogleIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-23%;
    color: #008388;
`;
const FacebookIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-20%;
    color:#008388;
`;

function LoginOptionScreen({ navigation }) {

    return (
        <View>
            <FacebookBtn
                style={{}}
                label="페이스북"
                onPress={() => {
                }}
            />
            <GoogleBtn
                style={{}}
                label="구글"
                onPress={() => {
                }}
            />
            <SignBtn
                style={{}}
                label="계정 만들기"
                onPress={() => navigation.navigate('SignUp')}
            />
            <GoogleIcon name="logo-google" size={18} />
            <FacebookIcon name="logo-facebook" size={18} />
        </View>
    );
}

const Stack = createStackNavigator();

function LoginOption() {
    return (

        <Stack.Navigator>
            <Stack.Screen name='LoginOption' component={LoginOptionScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{
                title: '',
                headerTransparent: true,
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
        </Stack.Navigator>
    );
}

export default LoginOption;