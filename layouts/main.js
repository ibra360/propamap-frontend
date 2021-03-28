import React, { useEffect } from 'react';
import Head from 'next/head';
import config from '../core/config';

export default ({ route, children }) => {
  return (
    <div className='main-layout'>
      <Head>
        <title>
          {route.title ? `${route.title} - ${config.title}` : config.title}
        </title>
      </Head>
      {children}
    </div>
  );
};
