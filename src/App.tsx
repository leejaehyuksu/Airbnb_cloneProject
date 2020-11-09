import * as React from 'react';
import Styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Button2 from '~/Components/Button2';
import Button1 from '~/Components/Button1';
import DetailsScreen from '~/Screens/Home';

const Textmain = Styled.Text`
  fontSize: 28px;
  color: white;
  fontWeight: 300;
  margin-Bottom: 90%;
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
  margin-Bottom: 5%;
  margin-top: 3%;
`;

const Text = Styled.Text`
  color: white;
  text-align:right;
  margin-right: 5%;
  margin-top: 3%;
  fontSize: 17px;
`;

const TextOption = Styled.Text`
color: white;
margin-top: 6%;
margin-left: 6%;
font-Weight: 300;
fontSize: 17px;
`;

const TextAgree = Styled.Text`
color: white;
margin-top: 5%;
padding-left: 7%;
fontSize: 13.2px;
text-decoration:underline;
`;

function HomeScreen({ navigation }) {
  return (

    <View>
      <Text>로그인</Text>
      <Image source={require('~/Assets/Images/airbnb-logo.png')} />
      <Textmain>에어비앤비에 오신 것을 {"\n"}환영합니다!</Textmain>
      <Button2
        style={{ marginBottom: '83%' }}
        label="f     페이스북 계정으로 로그인"
        onPress={() => {
        }}
      />
      <Button1
        style={{ fontcolor: '#fffff' }}
        label="계정 만들기"
        onPress={() => navigation.navigate('Details')}
      />
      <TextOption>옵션 더 보기</TextOption>
      <TextAgree>'계속하기','계정 만들기' 또는 '옵션 더 보기'를 탭하면 {"\n"}에어비앤비의 서비스 약관, 결제 서비스 약관, 개인정보 {"\n"}처리방침, 차별금지 정책에 동의하는 것입니다.</TextAgree>
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
        <Stack.Screen name="Details" component={DetailsScreen} options={{
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