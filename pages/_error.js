import React from 'react';
import Link from 'next/link';

import AppLayout from '../layouts/AppLayout';
import { Button } from '../components/html';

import site from '../core/config/sitemap';

import '../assets/scss/error.scss';

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  GetError404 = () => (
    <div className='page-404'>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link href={site.routes.dashboard.path}>
        <a>
          <Button category='primary' title='Home' />
        </a>
      </Link>
    </div>
  );

  GetError500 = () => (
    <div className='page-500'>
      <h1>500</h1>
      <h3>Server Error</h3>
      <Link href={site.routes.dashboard.path}>
        <a>
          <Button category='primary' title='Home' />
        </a>
      </Link>
    </div>
  );

  render() {
    let response;
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = this.GetError404();
        break;
      case 500:
        response = this.GetError500();
        break;
      default:
        response = this.GetError500();
    }

    return <AppLayout route={site.routes.error}>{response}</AppLayout>;
  }
}

export default ErrorPage;
