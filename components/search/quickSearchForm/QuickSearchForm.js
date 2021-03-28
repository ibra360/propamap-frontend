import React, { useState, useEffect } from 'react';
import { Typography, Row, Form, Col } from 'antd';

import './QuickSearchForm.scss';
import formValidator from '../../../utils/services/formValidator';
import { TextBox, SelectBox, Button } from '../../html';
import { SearchLocation } from '../../pagePartial';
import { propertyFor, sellPropertyType } from '../../../core/constants/data';
import { SearchPropertiesAction } from '../../../redux/actions/property';
import { connect } from 'react-redux';

const { Title } = Typography;

const QuickSearchForm = ({ onSuccess, options, onLoading }) => {
  const initialForm = {
    location: {
      label: 'Location',
      value: '',
      required: true,
      id: 'location'
    },
    propertyFor: {
      label: 'Property For',
      name:'propertyFor',

      showLabel: false,
      placeholder: 'Propery For',
      value: [],
      searchable: true,
      id: 'propertyFor',
      type: 'text',
      onSelect: (event) => _onSelect(event,'propertyFor'),
    },
    propertyType: {
      label: 'Property Type',
      showLabel: false,
      placeholder: 'Add property type',
      value: [],
      searchable: true,
      id: 'propertyType',
      type: 'text',
      onSelect: (event) => _onSelect(event,'propertyType'),
    }
  };

  const [loading, setLoading] = useState(false);
  const [quickSearchForm, setQuickSearchForm] = useState(initialForm);

  // Events

  useEffect(() => {
    if (options) {
      let newForm = quickSearchForm;
      newForm.location.value = options.location;
      newForm.propertyFor.value = options.propertyFor;
      newForm.propertyType.value = options.propertyType;
      setQuickSearchForm({ ...newForm });
    }
  }, [options]);

  const _onSelect = (event,name) => {
    console.log('event and name from quick search',event,name)
    let newForm = quickSearchForm;
    // newForm[event.target.name].value = event.target.value;
    newForm[name].value = [event];

    setQuickSearchForm({ ...newForm });
  };

  const _onClickSearch = async (event) => {
    event.preventDefault();
    const { isValid, form } = formValidator(quickSearchForm);
    setQuickSearchForm({ ...form });

    if (isValid) {
      setLoading(true);
      if (onLoading) onLoading(true);
      try {
        const searchQuery = {
          lat: quickSearchForm.location.value.lat,
          lon: quickSearchForm.location.value.lng,
          propertyFor: quickSearchForm.propertyFor.value,
          propertyType: quickSearchForm.propertyType.value,
          page: 1,
          limit: 10
        };
        await searchProperty(searchQuery);
      } catch (err) {}
      setLoading(false);
      if (onLoading) onLoading(false);
    }
  };

  // Utils

  const searchProperty = async (query) => {
    let res = await SearchPropertiesAction(query);
    if (res.result) {
      if (onSuccess)
        onSuccess(
          query,
          res,
          quickSearchForm.location.value.location.description
        );
    } else {
      notification.error(res.message || 'Something went wrong!');
    }
  };

  const updatePropertyLocation = (value) => {
    const { lat, lng, location } = value;
    let newForm = quickSearchForm;
    newForm.location.value = { lat, lng, location };
    setQuickSearchForm({ ...newForm });
  };

  return (
    <div className='cmp-quick-search-form'>
      <Title level={4}>Quick Search</Title>
      <Row gutter={[16, 16]}>
        <Form onSubmit={_onClickSearch} noValidate>
          <Col span={24}>
            <SearchLocation
              initialValue={
                options && quickSearchForm.location.value.location
                  ? quickSearchForm.location.value.location.description
                  : ''
              }
              onSuccess={updatePropertyLocation}
            />
            {quickSearchForm.location.error ? (
              <div className='invalid-message'>
                {quickSearchForm.location.errorComputedMessage}
              </div>
            ) : null}
          </Col>
          <Col span={24}>
            <SelectBox {...quickSearchForm.propertyFor} options={propertyFor} />
          </Col>
          <Col span={24}>
            <SelectBox
              {...quickSearchForm.propertyType}
              options={
                quickSearchForm.propertyFor.value &&
                quickSearchForm.propertyFor.value != ''
                  ? quickSearchForm.propertyFor.value == 'Rent'
                    ? rentPropertyType
                    : sellPropertyType
                  : []
              }
            />
          </Col>
          <Col span={24}>
            <Button
              type='submit'
              title='Search'
              size='large'
              category='success'
              block={true}
              loading={loading}
              className='quick-search-btn'
            />
          </Col>
        </Form>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ UserReducer }) => ({
  options: UserReducer.SearchOptions
});

const connectedComponent = connect(mapStateToProps, null)(QuickSearchForm);

export { connectedComponent as QuickSearchForm };
