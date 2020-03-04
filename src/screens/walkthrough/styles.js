import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const BackgroundLayer = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const Cover = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContainerDown = styled.View`
  width: 100%;
  height: 45%;
  z-index: 1;
  position: absolute;
  bottom: 0;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
  text-align: center;
`;
