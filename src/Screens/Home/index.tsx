import * as React from 'react';
import Styled from 'styled-components/native';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;

const MainText = Styled.Text`
    color: white;
    margin-left: 5%;
    margin-top: 15%;
    fontSize: 25px;
    font-Weight: 500;
`;

const NameText = Styled.Text`
    color: white;
    margin-top: 10%;
    margin-left: 5%;
`;

const TextInput = Styled.TextInput`
    width:80%;
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
width:80%;
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
const DetailsScreen = () => {
    const [FirstNamevalue, onChangeText] = React.useState('');
    const [LastNamevalue, unChangeText] = React.useState('');


    return (
        <View>
            <MainText>이름을 입력해 주세요.</MainText>
            <NameText>이름(예: 길동)</NameText>
            <TextInput
                style={{}}
                onChangeText={text => onChangeText(text)}
                value={FirstNamevalue}
            />
            <NameText>성(예: 홍)</NameText>
            <TextNameInput
                style={{}}
                onChangeText={text => unChangeText(text)}
                value={LastNamevalue}
            />
        </View>

    );
}
export default DetailsScreen;