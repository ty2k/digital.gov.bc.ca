import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Alert } from 'antd';
import { Grid } from 'react-flexbox-grid';

export const GlobaStyleSize = createGlobalStyle`
 html {
  font-size: 10px;
 }
`;

// Used for the Digital Framework page
export const DigitalBlock = styled.div.attrs({
  className: 'digitalBlock',
})`
  padding-top: 60px;
  margin-bottom: 25px;
  @media only screen and (max-width: 400px) {
    margin-bottom: 40px;
  }
`;

export const FooterStyled = styled.footer.attrs()`
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
`;

export const SimplePageBody = styled.div.attrs({
  id: 'content-body',
})`
  margin: auto;
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
`;

// This will is the base style for horizontal alignment of page content
// all resposive elements must be in some kind of container object.
const HorizontalContainer = styled(Grid).attrs({
  className: 'horizontalAlignment',
})`
  margin: auto;
  @media screen and (min-width: 576px) {
    width: 540px;
  }
  @media screen and (min-width: 768px) {
    width: 720px;
  }
  @media screen and (min-width: 992px) {
    width: 960px;
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`;

export const BannerHorizontalContainer = styled(HorizontalContainer).attrs({
  className: 'bannerCenterText',
  id: 'main-content-anchor',
})`
  text-align: center;
`;

export const BreadcrumbContainer = styled(HorizontalContainer).attrs({
  className: 'breadcrumb',
})`
  background-color: #f2f2f2;
`;

export const ContentBlockContainer = styled(HorizontalContainer).attrs({
  className: 'contentBlockContainer',
})`
  padding-bottom: 120px;
  @media only screen and (max-width: 800px) {
    padding-bottom: 60px;
  }
`;

export const FooterContainer = styled(HorizontalContainer).attrs({
  className: 'footerContainer',
})``;

export const PageContainer = styled(HorizontalContainer).attrs({
  className: 'pageContainer',
})`
  background-color: #f2f2f2;
  padding-top: 10px;
  padding-bottom: 70px;
  @media only screen and (max-width: 800px) {
    padding-top: 65px;
  }
`;

export const NavBarContainer = styled(HorizontalContainer).attrs({
  className: 'navBar',
})`
  z-index: 0;
`;

export const RouteBody = styled.div.attrs({
  className: 'routeBody',
})`
  background-color: #f2f2f2;
  z-index: -2;
  @media only screen and (max-width: 800px) {
    padding-bottom: 60px;
  }
`;

export const CovidBannerStyle = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const CovidAlert = styled(Alert)`
  background-color: #355992;
  border: none;
  textalign: center;
  width: 100%;
`;
