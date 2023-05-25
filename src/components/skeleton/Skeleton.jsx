import React from 'react';
import ContentLoader from 'react-content-loader';

const HeadBodyGrid = ({ boxSkeleton = '530', ...rest }) => (
  <ContentLoader height='530' width='1200' {...rest}>
    <rect x='20' y='0' rx='10' ry='0' width='290' height={boxSkeleton} />
    <rect x='350' y='0' rx='10' ry='0' width='290' height={boxSkeleton} />
    <rect x='680' y='0' rx='10' ry='0' width='290' height={boxSkeleton} />
  </ContentLoader>
);

HeadBodyGrid.metadata = {
  name: 'Didier Munezero',
  github: 'didiermunezero',
  description: 'Grid for content of head and body',
  filename: 'HeadBodyGrid',
};

export default HeadBodyGrid;
