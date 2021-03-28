import React, { useEffect, useState } from 'react';
import { Avatar, Rate, Divider } from 'antd';

import './ContactDetailsCard.scss';
import { Button } from '../../html';
import { dateFormatter } from '../../../utils/helpers/dateFormatter';
import { redirect } from '../../../utils/site';

const ContactDetailsCard = (props) => {
  console.log(props,"dsgfhjgjksvdhjhfdfgfjhweiufhwjg")
  const [isFav, setIsFav] = useState(false)
    
  useEffect(() => {
    if (props.user && props.user.favorite && props.user.favorite.includes(window.location.href.split('/').slice(-1)[0])) {
      setIsFav(true)
    }
  },[])
  
  const onFavorite = () => {
    console.log(isFav,"isFav")
    if (isFav) {
      props.onRemoveFav()
    } else {
      props.onAddFav()
    }
    if(props.user) {
      setIsFav(!isFav)
    }
  }

  console.log('details props -->',props)
  return (
    <div className='cmp-contact-details-card'>
      <div className='details'>
        <Avatar size={94} icon='user' src={props.profile_picture}/>
        <p className='owner-name'>
          {props.first_name
            ? `${props.first_name} ${props.last_name}`
            : 'Example Name'}
        </p>
        {/* <p>Company</p> */}
        <p className='owner-rating'>
          {/* <Rate disabled defaultValue={5} /> */}
          <span className='review-count'>Number of Ads - ({props.property_count ? props.property_count : 0})</span>
        </p>
        <p className='date-joined'>
          Joined {dateFormatter(props.createdAt ? props.createdAt : Date.now())}
        </p>
        <Divider />
        {/* <Button
          size='large'
          icon='phone-square-alt'
          title={props.mobile_number ? props.mobile_number : '+9239847665'}
          className='detail-button contact-button'
          block={true}
        />
        <Button
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
          title={props.user ? props.user._id == props._id ? "View Chats" : 'Chat with advertiser' : 'Chat with advertiser'}
          className='detail-button chat-button'
          block={true}
          loading={props.isChat}
          onClick={props.user ? props.user._id == props._id ? () => redirect('/messages') : props.onCreateChatroom : props.onCreateChatroom}
        />
        <Button
          size='large'
          icon='heart'
          category='secondary'
          title={!isFav ? 'Add to favourite' : 'Remove from favorite'}
          className='detail-button favourite-button'
          block={true}
          loading={props.isFav}
          onClick={onFavorite}
        />
        </>
        }
      </div>
    </div>
  );
};

export { ContactDetailsCard };
