import styled from 'styled-components/native';
import logo from '../../assets/logo.png';

export const Container = styled.KeyboardAvoidingView`
  height: 100%;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 0 30px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  align-self: center;
  height: 150px;
  width: 240px;
`;

export const InputLogin = styled.TextInput`
  height: 54px;
  border-radius: 6px;
  border: 1px solid #999;
  margin: 20px 0;
  padding: 10px 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 54px;
  background: #ee4e62;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
