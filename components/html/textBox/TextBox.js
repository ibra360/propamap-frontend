import React from 'react';
import { Input, InputNumber } from 'antd';

import './TextBox.scss';

const { Password, Search } = Input;

const TextBox = props => {
  // Events

  const _onChange = ev => {
    let eve;
    if (props.type === 'number') {
      console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
      eve = {
        target: {
          value: ev,
          name: props.id
        }
      };
    } else {
      eve = ev;
    }
    props.onChange(eve);
  };

  const commonProps = {
    prefix: props.prefixIcon,
    suffix: props.suffixIcon,
    addonAfter: props.prefixButton,
    addonBefore: props.suffixButton,
    disabled: props.disabled,
    size: props.size,
    onPressEnter: props.onPressEnter,
    allowClear: props.allowClear,
    readOnly: props.readOnly,
    name: props.id,
    value: props.value,
    hidden: props.hidden,
    onChange: _onChange,
    className: props.className,
    id: props.id,
    placeholder: props.placeholder,
    required: props.required,
    autoFocus: props.autoFocus
  };

  // Render

  return (
    <div className='cmp-text-box'>
      {props.showLabel ? (
        props.label ? (
          <label htmlFor={props.id}>{props.label}</label>
        ) : null
      ) : null}
      {props.type === 'password' ? (
        <Password {...commonProps} visibilityToggle={props.visibilityToggle} />
      ) : props.type === 'search' ? (
        <Search
          {...commonProps}
          enterButton={props.enterButton}
          onSearch={props.onSearch}
          loading={props.loading}
        />
      ) : props.type === 'number' ? (
        <InputNumber
          {...commonProps}
          formatter={props.formatter}
          min={props.min}
          max={props.max}
          parser={props.parser}
          decimalSeparator={props.decimalSeparator}
          step={props.step}
        />
      ) : (
              <Input autoComplete="off" autoSave="off" {...commonProps} type={props.type} disabled={props.disabled}/>
      )}
      {props.error ? (
        <div className='invalid-message'>{props.errorComputedMessage}</div>
      ) : null}
      {props.helpText ? (
        <small id={`${props.id}HelpBlock`}>{props.helpText}</small>
      ) : null}
    </div>
  );
};

TextBox.defaultProps = {
  size: 'default',
  readOnly: false,
  errorComputedMessage: '',
  error: false,
  type: 'text',
  hidden: false,
  disabled: false,
  required: false,
  autoFocus: false,
  visibilityToggle: true,
  allowClear: true,
  showLabel: true
};

export { TextBox };
