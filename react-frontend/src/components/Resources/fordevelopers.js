import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import InfoCard from '../Home/infocard';

import { ContentBlock } from '../StyleComponents/pageContent';
import { ResourcePageSubHeading } from '../StyleComponents/headings';

function ForDevelopers() {
  return (
    <ContentBlock id="forDevelopers">
      <Grid>
        <Row>
          <Col sm={12}>
            <ResourcePageSubHeading>For Developers</ResourcePageSubHeading>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InfoCard
              title={'BCGov on Github'}
              description={
                'Explore hundreds of open source code repositories that are being maintained by the teams who are building modern digital services in British Columbia.'
              }
              linkText={'Explore'}
              linkPath={'https://github.com/bcgov'}
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              title={'DevHub'}
              description={
                'One place that brings together resources for developers building digital products for the BC Government.'
              }
              linkText={'Visit Site'}
              linkPath={'https://developer.gov.bc.ca/'}
              height="300px"
            />
          </Col>
        </Row>
      </Grid>
    </ContentBlock>
  );
}

export default ForDevelopers;
