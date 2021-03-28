import React from 'react';
import { DatePicker as DatePick } from 'antd';
import moment from 'moment';

import './DatePicker.scss';

const DatePicker = props => {
  // Events

  const _onChange = value => {
    let eve = {
      target: {
        value: value,
        name: props.id
      }
    };
    props.onChange(eve);
  };

  // Utils

  const disabledDate = current => {
    return current && current < moment().endOf('day');
  };

  return (
    <div className='cmp-date-picker'>
      {props.showLabel ? (
        props.label ? (
          <label htmlFor={props.id}>{props.label}</label>
        ) : null
      ) : null}
      <DatePick
        {...props}
        value={
          props.value !== '' && props.value !== null
            ? moment(props.value)
            : null
        }
        onChange={_onChange}
        format={props.format}
        name={props.id}
        disabledDate={
          props.disablePrevDates ? disabledDate : props.disabledDate
        }
      />
      {props.error ? (
        <div className='invalid-message'>{props.errorComputedMessage}</div>
      ) : null}
      {props.helpText ? (
        <small id={`${props.id}HelpBlock`}>{props.helpText}</small>
      ) : null}
    </div>
  );
};

DatePicker.defaultProps = {
  format: 'DD-MM-YYYY',
  disabledDate: null,
  showLabel: true
};

export { DatePicker };
