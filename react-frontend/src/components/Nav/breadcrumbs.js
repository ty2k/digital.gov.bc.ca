import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

import { DisplayNames as routeDisplayNames } from '../Nav/routes';
import {
  BreadcrumbLI,
  BreadcrumbUL,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';
import { BreadcrumbContainer } from '../StyleComponents/pageContent';
const BreadCrumbs = (props) => {
  const history = useHistory();
  const routeLocation = useLocation();
  const [pathName, setPathName] = useState(routeLocation.pathname);

  useEffect(() => {
    history.listen((location) => {
      setPathName(location.pathname);
    });
  }, [history, props]);

  if (pathName === '/') {
    return null;
  }

  let pathArray = pathName.split('/');
  let displayName = pathArray[1];
  let listEntry = [];

  listEntry.push(
    <BreadcrumbLI key="0">
      <HrefLinkStandaloneInternal to="/">Home</HrefLinkStandaloneInternal>
    </BreadcrumbLI>
  );
  listEntry.push(<BreadcrumbLI key="0->">{'>'}</BreadcrumbLI>);
  for (var i = 1; i < pathArray.length - 1; i++) {
    displayName = pathArray[i];
    listEntry.push(
      <BreadcrumbLI key={i}>
        <HrefLinkStandaloneInternal to={'/' + displayName}>
          {routeDisplayNames[displayName]}
        </HrefLinkStandaloneInternal>
      </BreadcrumbLI>
    );
    listEntry.push(<BreadcrumbLI key={i + '->'}>{'>'}</BreadcrumbLI>);
  }

  let breadCrumb = props ? props.breadCrumb : false;

  //no paths exist yet that are more than one path deep, if this occurs then we can add a split function using / to populate .options

  const crumbs = (
    <BreadcrumbUL style={breadCrumb ? { marginTop: 0 } : {}}>
      {listEntry}
    </BreadcrumbUL>
  );

  return (
    <BreadcrumbContainer>
      <Grid>{crumbs}</Grid>
    </BreadcrumbContainer>
  );
};

export default BreadCrumbs;
