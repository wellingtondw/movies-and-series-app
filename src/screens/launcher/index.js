import React from 'react';
import {
  Container,
  ContainerDecoration,
  Decoration,
  Logo,
  Copy,
} from './styles';

import DecorationImage from '../../assets/images/decoration.png';
import LogoImage from '../../assets/images/logo.png';
const Launcher = () => {
  return (
    <Container colors={['#F99F00', '#DB3069']}>
      <ContainerDecoration>
        <Decoration source={DecorationImage} resizeMode="stretch" />
        <Logo source={LogoImage} resizeMode="contain" />
        <Copy>Copyright © 2017</Copy>
      </ContainerDecoration>
    </Container>
  );
};

export default Launcher;
