import React, { useEffect } from 'react';
import Styled from 'styled-components/native';
import MainBtn from '~/Components/Button/MainBtn';
import Icon from 'react-native-vector-icons/Ionicons';

const View = Styled.View`
  backgroundColor: white;
  flex: 1;
`;

const TextInput = Styled.TextInput`
    margin-left:15%;
    height: 40px;
    border-color:white;
    width:75%;
    position: absolute;
    color:black;
    background-color:white;
    margin-top:3%
    border-radius: 20px;
    padding-left:15%;
`;

const Image = Styled.Image`
    width: 100%;
    height: 80%;
`;

const MainText = Styled.Text`
    position: absolute;
    margin-top : 25%;
    margin-left: 3%;
    color : white;
    fontSize: 22px;
    fontWeight: 700;
`;

const Searchicon = Styled(Icon)`
    margin-top:6%;
    margin-left:90%;
    color:black;  
`;

function MainScreen({ navigation }) {
    const [Serachvalue, onChangeText] = React.useState('');
    return (

        <View>
            <Image source={require('~/Assets/Images/airbnb_background.png')} />
            <TextInput
                placeholder="어디로 여행가시나요?"
                onChangeText={text => onChangeText(text)}
                value={Serachvalue}
            />
            <Searchicon name="search-outline" size={18} onPress={() => navigation.navigate('Map')} />
            <MainText>이제, 여행은 가까운{"\n"}곳에서</MainText>
        </View>
    );
}

export default MainScreen;