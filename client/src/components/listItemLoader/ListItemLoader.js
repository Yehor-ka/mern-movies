import React from 'react';
import ContentLoader from 'react-content-loader';

const ListItemLoader = (props) => (
  <ContentLoader
    speed={1}
    width={230}
    height={110}
    viewBox="0 0 230 110"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="420" rx="0" ry="0" width="85" height="36" />
    <rect x="126" y="418" rx="20" ry="20" width="144" height="39" />
    <rect x="147" y="131" rx="0" ry="0" width="1" height="0" />
    <rect x="2" y="0" rx="0" ry="0" width="225" height="110" />
  </ContentLoader>
);

export default ListItemLoader;
