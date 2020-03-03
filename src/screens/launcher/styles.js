import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const ContainerDecoration = styled.View`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  align-items: center;
`;

export const Decoration = styled.Image`
  width: 100%;
  height: 663px;
`;

export const Logo = styled.Image`
  width: 108px;
  height: 135px;
  position: absolute;
  top: 100px;
`;

export const Copy = styled.Text`
  position: absolute;
  bottom: 18px;
  color: #fff;
  font-size: 12px;
`;
