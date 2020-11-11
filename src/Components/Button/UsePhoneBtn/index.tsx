import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  width: 110%;
  height: 30px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #008388;
  margin-left: 5%;
  margin-top: -10%;
  border: 1px;
  border-color: white;
`;
const Label = Styled.Text`
font-Weight: 500;
font-size: 12px;
color: white;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const UserPhoneBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label>{label}</Label>
        </StyledButton>
    );
};


export default UserPhoneBtn;
