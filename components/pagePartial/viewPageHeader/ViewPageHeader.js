import React from 'react';
import { Avatar, Typography } from 'antd';

import './ViewPageHeader.scss';

import capitalize from '../../../utils/helpers/stringHelper';
import getDate from '../../../utils/helpers/dateFormatter';

const { Title } = Typography;

const ViewPageHeader = ({ title, createdBy, date }) => {
  return (
    <div className='cmp-view-page-header'>
      {React.isValidElement(title) ? (
        <div>{title}</div>
      ) : (
        <Title level={2}>{capitalize(title)}</Title>
      )}
      <div className='created'>
        <div className='details'>
          <div className='created-by'>{capitalize(createdBy)}</div>
          <div className='created-at'>{getDate(date)}</div>
        </div>
        <div className='avatar'>
          <Avatar size='large' icon='user' />
        </div>
      </div>
    </div>
  );
};

export { ViewPageHeader };
