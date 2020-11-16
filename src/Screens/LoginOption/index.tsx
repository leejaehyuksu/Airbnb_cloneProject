import * as React from 'react';
import Styled from 'styled-components/native';
import LoginBtn from '~/Components/Button/LoginBtn';
import SignUpBtn from '~/Components/Button/SignUpBtn';

import Icon from 'react-native-vector-icons/Ionicons';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;
const FacebookBtn = Styled(LoginBtn)`
    margin-top : 60%;
`;

const GoogleBtn = Styled(LoginBtn)`
    margin-top : 2%;
`;

const SignBtn = Styled(SignUpBtn)`
    margin-top : 2%;
    backgroundColor: #008388;
    color: white;
`;
const GoogleIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-22%;
    color: #008388;
`;
const FacebookIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-19%;
    color:#008388;
`;

function LoginOptionScreen({ navigation }) {

    return (
        <View>
            <FacebookBtn
                label="페이스북"
                onPress={() => {
                }}
            />
            <GoogleBtn
                label="구글"
                onPress={() => {
                }}
            />
            <SignBtn
                label="계정 만들기"
                onPress={() => navigation.navigate('SignUp')}
            />
            <GoogleIcon name="logo-google" size={18} />
            <FacebookIcon name="logo-facebook" size={18} />
        </View>
    );
}


export default LoginOptionScreen;