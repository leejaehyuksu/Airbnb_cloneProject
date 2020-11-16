import React, { useEffect } from 'react';
import Styled from 'styled-components/native';
import LoginBtn from '~/Components/Button/LoginBtn';
import SignUpBtn from '~/Components/Button/SignUpBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';


const Textmain = Styled.Text`
  fontSize: 28px;
  color: white;
  fontWeight: 300;
  margin-left: 5%;
`;

const TextLogin = Styled.Text`
  fontSize: 14px;
  color: white;
  fontWeight: 300;
  margin-left: 85%;
  margin-top: 3%;
`;

const View = Styled.View`
  backgroundColor: #008388;
  flex: 1;
`;

const Image = Styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 5%;
  margin-Bottom: 3%;
  margin-top: -2%;
`;

const TextAgree = Styled.Text`
    color: white;
    margin-top: 3%;
    padding-left: 7%;
    fontSize: 13.2px;
    text-decoration:underline;
`;

const FacebookIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-59%;
    color:#008388;  
`;

const FaceBookBtn = Styled(LoginBtn)`
    margin-top:11%;
    color:#008388;
    background-color:white;
`;
const SignBtn = Styled(SignUpBtn)`
    margin-top:4%;
`;
const OptionText = Styled.Text`
    fontSize: 17px;
    color:white;
    margin-left:6%;
    margin-top:7%;
    margin-bottom:3%;
`;

function HomeScreen({ navigation }) {

    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (

        <View>
            <TextLogin onPress={() => navigation.navigate('Login')}>로그인
            </TextLogin>

            <Image source={require('~/Assets/Images/airbnb-logo.png')} />
            <Textmain>에어비앤비에 오신 것을 {"\n"}환영합니다!</Textmain>
            <FaceBookBtn
                label="페이스북 계정으로 로그인"
                onPress={() => {
                }}
            />
            <SignBtn
                style={{}}
                label="계정 만들기"
                onPress={() => navigation.navigate('SignUp')}
            />
            <OptionText onPress={() => navigation.navigate('LoginOption')}
            >옵션 더보기</OptionText>
            <TextAgree>'계속하기','계정 만들기' 또는 '옵션 더 보기'를 탭하면 {"\n"}에어비앤비의 서비스 약관, 결제 서비스 약관, 개인정보 {"\n"}처리방침, 차별금지 정책에 동의하는 것입니다.</TextAgree>
            <FacebookIcon name="logo-facebook" size={18} />
        </View>
    );
}



export default HomeScreen;