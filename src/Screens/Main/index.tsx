import * as React from 'react';
import Styled from 'styled-components/native';
import FacebookLoginBtn from '~/Components/Button/FacebookLoginBtn';
import LoginOptionBtn from '~/Components/Button/LoginOptionBtn';
import SignUpBtn from '~/Components/Button/SignUpBtn';
import LoginBtn from '~/Components/Button/LoginBtn';
import Icon from 'react-native-vector-icons/Ionicons';


const Textmain = Styled.Text`
  fontSize: 28px;
  color: white;
  fontWeight: 300;
  margin-left: 5%;
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
    margin-top:-57.5%;
    color:#008388;
    
`;

function HomeScreen({ navigation }) {
    return (

        <View>
            <LoginBtn
                style={{}}
                label="로그인"
                onPress={() => navigation.navigate('Login')}
            />
            <Image source={require('~/Assets/Images/airbnb-logo.png')} />
            <Textmain>에어비앤비에 오신 것을 {"\n"}환영합니다!</Textmain>
            <FacebookLoginBtn
                style={{}}
                label="페이스북 계정으로 로그인"
                onPress={() => {
                }}
            />
            <SignUpBtn
                style={{}}
                label="계정 만들기"
                onPress={() => navigation.navigate('SignUp')}
            />
            <LoginOptionBtn
                style={{}}
                label="옵션 더보기"
                onPress={() => navigation.navigate('LoginOption')}
            />
            <TextAgree>'계속하기','계정 만들기' 또는 '옵션 더 보기'를 탭하면 {"\n"}에어비앤비의 서비스 약관, 결제 서비스 약관, 개인정보 {"\n"}처리방침, 차별금지 정책에 동의하는 것입니다.</TextAgree>
            <FacebookIcon name="logo-facebook" size={18} />
        </View>
    );
}



export default HomeScreen;