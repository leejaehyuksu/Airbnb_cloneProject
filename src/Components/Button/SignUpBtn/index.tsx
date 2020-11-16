import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  width: 90%;
  height: 42px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-top: 0%;
  border: 1px;
  border-color: white;
  background-color:#008388;
`;
const Label = Styled.Text`
font-Weight: 700;
font-size: 17px;
color: white;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const SignUpBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label>{label}</Label>
        </StyledButton>
    );
};

export default SignUpBtn;
