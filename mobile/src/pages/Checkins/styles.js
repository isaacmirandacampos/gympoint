import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.View`
  height: 100%;
  width: 90%;
  align-self: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin: 10px 0;
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

export const ColumnCheckins = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Checkin = styled.View`
  margin: 10px 0;
  background: #fff;
  border: 1px solid #ddd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  height: 54px;
  border-radius: 8px;
`;
export const Qtd = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 15px;
`;

export const TextDate = styled.Text`
  font-size: 13px;
  color: #666;
`;
