import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Typography, Card as AntCard, Avatar } from 'antd';

import './styles/[id].scss';

import AppLayout from '../../layouts/AppLayout';

import {
  PropertyDetails,
  ContactDetailsCard
} from '../../components/properties';
import { CardSlider, MapContainer } from '../../components/pagePartial';

import site from '../../core/config/sitemap';
import { useRouter } from 'next/router';
import { GetPropertyByIdAction } from '../../redux/actions/property';

const { Title } = Typography;
const { Meta } = AntCard;

const DetailView = ({ property, user }) => {
  const [previewProperty, setPreviewProperty] = useState(null);

  useEffect(() => {
    const onUnload = e => {
      return 'Are you sure!';
    };

    window.onbeforeunload = onUnload;

    return () => (window.onbeforeunload = undefined);
  }, []);

  useEffect(() => {
    if (property) {
      setPreviewProperty(property);
    }
  }, property);

  return (
    <div className='page-detail-view'>
      {previewProperty && (
        <Row gutter={[20, 12]}>
          <Col xl={18} md={18} sm={24}>
            <PropertyDetails
              property={previewProperty}
              user={user}
              preview={true}
            />
          </Col>
          <Col xl={6} md={6} sm={24}>
            <MapContainer
              {...previewProperty}
              defaultLocation={{
                lat: property.coord.lat,
                lng: property.coord.lon
              }}
              defaultName={property.title}
              showSearch={false}
            />
            <div className='card-display'>
              <ContactDetailsCard {...user} />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

DetailView.getLayout = page => {
  return <AppLayout route={site.routes.viewProperty}>{page}</AppLayout>;
};

const mapStateToProps = ({ UserReducer }) => ({
  property: UserReducer.Property,
  user: UserReducer.User
});

export default connect(mapStateToProps, null)(DetailView);
