import * as React from 'react';
import Styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FacebookLoginBtn from '~/Components/Button/FacebookLoginBtn';
import LoginOptionScreen from '~/Screens/LoginOption';
import LoginOptionBtn from '~/Components/Button/LoginOptionBtn';
import SignUpScreen from '~/Screens/SignUp';
import SignUpBtn from '~/Components/Button/SignUpBtn';
import LoginScreen from '~/Screens/Login';
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


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{
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
        <Stack.Screen name='LoginOption' component={LoginOptionScreen} options={{
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;