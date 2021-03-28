import React from 'react';
import { Row, Col } from 'antd';

import './ViewPageCard.scss';
import { collace } from '../../../utils/helpers/objectHelpers';

const ViewPageCard = ({ content }) => {
  return (
    <div className='cmp-view-page-card'>
      <Row gutter={[8, 8]}>
        {content.map(({ title, description }) => (
          <Col xl={6} lg={6} md={12} sm={24}>
            <div className='title'>{title}</div>
            <div className='desc'>{collace(description)}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export { ViewPageCard };
