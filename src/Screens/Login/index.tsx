import * as React from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import UserPhoneBtn from '~/Components/Button/UsePhoneBtn';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;

const MainText = Styled.Text`
    color: white;
    margin-left: 5%;
    margin-top: 10%;
    fontSize: 25px;
    font-Weight: 700;
`;

const NameText = Styled.Text`
    color: white;
    margin-top: 10%;
    margin-left: 5%;
`;

const TextInput = Styled.TextInput`
    width:85%;
    border-color:white;
    height: 40px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 1px;
    margin-left:5%;
    font-size:20px;
    color:white;
    padding-bottom:1px;
`;

const TextNameInput = Styled.TextInput`
    width:85%;
    border-color:white;
    height: 40px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 1px;
    margin-left:5%;
    font-size:20px;
    color:white;
    padding-bottom:1px;
`;

const StyledIcon = Styled(Icon)`
    margin-left:80%;
    margin-top:57%;
`;

const TextPasswordCheck = Styled.Text`
    color: white;
    margin-left:78%;
    margin-top:-5%;
`;

const ForgetPasswordText = Styled.Text`
    color: white;
    margin-top: 5%;
    margin-left:45%;
`;

const UsePhoneBtn = Styled(UserPhoneBtn)`
    width : 30%;
    margin-top : -11%;
    backgroundColor: #008388;
    color: white;
`;


function LoginScreen({ navigation }) {
    const [Emailvalue, onChangeText] = React.useState('');
    const [Passwordvalue, unChangeText] = React.useState('');

    return (
        <View>
            <ForgetPasswordText>비밀번호가 생각나지 않으세요?</ForgetPasswordText>
            <MainText>로그인</MainText>
            <NameText>이메일 주소</NameText>
            <TextInput
                style={{}}
                onChangeText={text => onChangeText(text)}
                value={Emailvalue}
            />
            <NameText>비밀번호</NameText>
            <TextPasswordCheck>표시하기</TextPasswordCheck>
            <TextNameInput
                style={{}}
                onChangeText={text => unChangeText(text)}
                value={Passwordvalue}
            />
            <StyledIcon name="chevron-forward-circle-outline" size={50} color="white" />
            <UsePhoneBtn
                style={{}}
                label="전화번호 사용"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>

    );
}
export default LoginScreen; 