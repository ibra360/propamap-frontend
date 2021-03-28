import React, {useEffect} from 'react';
import Link from 'next/link';

import { Breadcrumb, Icon } from 'antd';
import { redirect } from "../../../utils/site";
import './Breadcrumb.scss';

const TopBreadcrumb = props => {
  // Utils
  console.log('bread -->',props)

  const getModuleLink = () => {
    return props.module.isHome || props.page.isIndex || props.page.url === '/properties/add' || props.page.url === '/resetpassword' ? null : (
      <Link href={props.module.url}>
        <a>{props.module.name}</a>
      </Link>
    );
  };

  const getPageLink = () => {
    return props.action ? (
      <Link href={props.page.url}>
        <a>{props.page.name}</a>
      </Link>
    ) : (
      <span>{props.page.name}</span>
    );
  };

  const getActionLink = () => {
    return props.action ? <span>{props.action.name}</span> : null;
  };

  // Render

  return (
    <div className='breadcrumb-top'>
      <Breadcrumb separator='/'>
        <Breadcrumb.Item>
          <Link href='/'>
            <a>
              <Icon
                type='home'
                style={{ fontSize: '16px', marginRight: '4px' }}
              />
              Home
            </a>
          </Link>
        </Breadcrumb.Item>
       {props.page.url == '/properties/[id]' ? null : (<Breadcrumb.Item>{getModuleLink()}</Breadcrumb.Item>)}
        <Breadcrumb.Item>{getPageLink()}</Breadcrumb.Item>
        <Breadcrumb.Item>{getActionLink()}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export { TopBreadcrumb as Breadcrumb };
