import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import {
  BannerSideImageImg,
  BannerSideImgText,
} from '../../StyleComponents/bannerWithImage';
import {
  BannerSideImgTitle,
  BannerSideImgSubTitle,
} from '../../StyleComponents/bannerWithImage';
import { BannerHorizontalContainer } from '../../StyleComponents/pageContent';

const BannerSideImage = ({ content, image, title }) => {
  return (
    <BannerHorizontalContainer>
      <Grid>
        <Row middle="xs">
          <Col sm={12} md={6}>
            <BannerSideImgText>
              <BannerSideImgTitle>{title}</BannerSideImgTitle>
              <BannerSideImgSubTitle> {content} </BannerSideImgSubTitle>
            </BannerSideImgText>
          </Col>
          <Col sm={12} md={6}>
            <BannerSideImageImg alt="" src={image} />
          </Col>
        </Row>
      </Grid>
    </BannerHorizontalContainer>
  );
};

export default BannerSideImage;
