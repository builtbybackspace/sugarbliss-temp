import React from 'react';
import Slider from 'react-slick';

import styled from '@emotion/styled';

import { colors, sizing } from '../utils';
import { fonts } from '../design-system';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SLIDER_SETTINGS = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

type SeasonalProduct = {
  name: string;
  imageUrl: string;
  datesAvailable?: string;
  description?: string;
};

type Props = {
  seasonalProducts: SeasonalProduct[];
}

const SeasonalCarousel = ({seasonalProducts = []}: Props) => {

  return (
    <Container >
      <Slider {...SLIDER_SETTINGS}>
        {seasonalProducts.map((product, idx) => {
          return (
            <Slide key={idx}>
              {idx % 2 === 0 && (
                <LeftImageContainer>
                  <Image src={product.imageUrl} />
                </LeftImageContainer>
              )}
              <div>
                <Name>{product.name}</Name>
                {product.datesAvailable && (<DatesAvailable>{product.datesAvailable}</DatesAvailable>)}
                {product.description && (<Description>{product.description}</Description>)}
              </div>
              {idx % 2 !== 0 && (
                <RightImageContainer>
                  <Image src={product.imageUrl} />
                </RightImageContainer>
              )}
            </Slide>
          )
        })
        }
      </Slider>
    </Container>
  )
};

const Container = styled.div`
    width: 100%;
    position: relative;
    
    .slick-next {
      right: 15px;
    }
    
    .slick-prev {
      left: 4px;
      z-index: 1;
    }
    
    .slick-prev:before, .slick-next:before {
      color: ${colors.solids.BROWN};
      font-size: ${sizing(32)};
    }
    
    .slick-dots {
      bottom: 0;
    }
    
    .slick-arrow {
      width: ${sizing(32)};
      height: ${sizing(32)};
    }
    
    .slick-dots li button:before {
      font-size: ${sizing(12)};
      color: ${colors.solids.BROWN};
    }
    
    .slick-dots li.slick-active button:before {
      color: ${colors.solids.BROWN};
    }
`

const Slide = styled.div`
   width: 100%;
   height: ${sizing(500)};
   display: flex !important;
   justify-content: center;
   align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 300px;
  height: auto;
`;

const Name = styled.p`
  ${fonts.cursiveText['900']};
  margin-bottom: ${sizing(10)};
`;

const DatesAvailable = styled.p`
  ${fonts.boldText['500']};
   margin-bottom: ${sizing(10)};
`;

const Description = styled.p`
  ${fonts.regularText['700']};
`;

const LeftImageContainer = styled.div`
  margin-right: ${sizing(20)};
`;

const RightImageContainer = styled.div`
  margin-left: ${sizing(20)};
`;

export default SeasonalCarousel;