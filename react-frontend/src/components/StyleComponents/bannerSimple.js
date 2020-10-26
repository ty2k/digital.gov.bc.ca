import styled from 'styled-components';

export const BannerSubTitle = styled.p.attrs({
  className: 'bannerSubTitle',
})`
  color: #313132;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 22px;
  margin: auto;
  max-width: 800px;
  @media only screen and (max-width: 800px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const BannerText = styled.div.attrs({
  className: 'bannerText',
})`
  margin: auto;
  padding-top: 10px;
  text-align: center;
  width: 100%;
  @media only screen and (max-width: 800px) {
    margin-left: 8%;
    padding-top: 80px;
    width: 84%;
  }
`;

export const BannerTextWrapper = styled.div.attrs({
  className: 'bannerTextWrapper',
})`
  margin-bottom: 150px;
  padding-top: 150px;
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 800px) {
    padding-top: 60px;
  }
`;

export const BannerTitle = styled.h1.attrs({
  className: 'bannerTitle',
})`
  color: #313132;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 37px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 10px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    font-size: 31px;
  }
`;

export const BannerSimpleWrapper = styled.div.attrs({
  className: 'banner',
})`
  height: 400px;
  width: 100%;
  @media only screen and (max-width: 800px) {
    margin-top: -50px;
    padding-top: 40px;
  }
`;
