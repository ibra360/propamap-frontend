import React from 'react';
import { Avatar, Rate, Divider } from 'antd';

import './ContactDetailsCard.scss';
import { Button } from '../../html';
import { dateFormatter } from '../../../utils/helpers/dateFormatter';

const ContactDetailsCard = (props) => {
  console.log('details props -->', props)
  console.log(props.profile, 'testprofile')
  return (
    <div className='cmp-contact-details-card'>
      <div className='details'>
        <Avatar size={94} icon='user' src={props.profile_picture} />
        <p className='owner-name'>
          {props.first_name
            ? `${props.first_name} ${props.last_name}`
            : 'Example Name'}
        </p>
        {/* <p>Company</p> */}
        {/* <p className='owner-rating'>
          <Rate disabled defaultValue={5} />
          <span className='review-count'>(133)</span>
        </p> */}
        <p className='date-joined'>
          Joined {dateFormatter(props.createdAt ? props.createdAt : Date.now())}
        </p>
        {/* <Divider /> */}
        {/* <Button
          size='large'
          icon='phone-square-alt'
          title={props.mobile_number ? props.mobile_number : '+9239847665'}
          className='detail-button contact-button'
          block={true}
        /> */}
        {/* <Button
          size='large'
          icon='envelope-square'
          title={props.email ? props.email : 'example@example.com'}
          className='detail-button email-button'
          block={true}
        /> */}
        {
          !props.profile &&
          <>
            <Button
              size='large'
              icon='sms'
              title='Chat with advertiser'
              className='detail-button chat-button'
              block={true}
              loading={props.isChat}
              onClick={props.onCreateChatroom}
            />
            <Button
              size='large'
              icon='heart'
              category='secondary'
              title='Add to favourite'
              className='detail-button favourite-button'
              block={true}
              loading={props.isFav}
              onClick={props.onAddFav}
            />
          </>
        }
        {console.log(props.profile,"testprofile")}
      </div>
    </div>
  );
};

export { ContactDetailsCard };
