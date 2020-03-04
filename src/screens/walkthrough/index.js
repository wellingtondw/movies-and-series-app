import React from 'react';
import {
  Container,
  BackgroundLayer,
  Cover,
  ContainerDown,
  Title,
} from './styles';

import CoverImage from '../../assets/images/bitmap1.png';
import Rectangle from '../../assets/images/rectangle-bitmap1.png';

const WalkthroughOne = () => {
  return (
    <Container>
      <BackgroundLayer source={Rectangle} resizeMode="cover" />
      <Cover source={CoverImage} resizeMode="cover" />
      <ContainerDown>
        <Title>Get the firstMovie &TV information</Title>
      </ContainerDown>
    </Container>
  );
};

export default WalkthroughOne;
