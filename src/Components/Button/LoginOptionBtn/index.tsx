import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  height: 42px;
  justify-content: center;
  margin-left: 5%;
  margin-top: 4%;
`;

const Label = Styled.Text`
font-size: 15px;
color: white;
margin-left:3%;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const LoginOptionBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label>{label}</Label>
        </StyledButton>
    );
};

export default LoginOptionBtn;
