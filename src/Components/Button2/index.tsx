import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  width: 90%;
  height: 42px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-left: 5%;
  margin-top: -80%;
  border: 1px;
  border-color: white;
`;
const Label = Styled.Text`
color: #008388;
font-Weight: 700;
font-size: 17px;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const Button2 = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label>{label}</Label>
        </StyledButton>
    );
};


export default Button2;
