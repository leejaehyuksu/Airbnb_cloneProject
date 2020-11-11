import * as React from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;

const MainText = Styled.Text`
    color: white;
    margin-left: 5%;
    margin-top: 15%;
    fontSize: 25px;
    font-Weight: 700;
`;
const NameText = Styled.Text`
    color: white;
    margin-top: 15%;
    margin-left: 5%;
`;

const RequirePasswrod = Styled.Text`
    color: white;
    margin-top: 3%;
    margin-left: 5%;
    fontSize:17px;
`;
const StyledIcon = Styled(Icon)`
    margin-left:80%;
    margin-top:65%;
    color: white;
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
const TextPasswordCheck = Styled.Text`
    color: white;
    margin-left:78%;
    margin-top:-5%;
`;
const PasswordSetScreen = () => {
    const [Passwordvalue, onChangeText] = React.useState('');
    return (
        <View>
            <MainText>비밀번호 설정하기</MainText>
            <RequirePasswrod>암호는8자 이상이어야 하며 특수 문자를{"\n"}1개 이상 포함해야 합니다.</RequirePasswrod>
            <NameText>비밀번호</NameText>
            <TextPasswordCheck>표시하기</TextPasswordCheck>
            <TextNameInput
                style={{}}
                onChangeText={text => onChangeText(text)}
                value={Passwordvalue}
            />
            <StyledIcon name="chevron-forward-circle-outline" size={50} />
        </View>

    );
}
export default PasswordSetScreen;