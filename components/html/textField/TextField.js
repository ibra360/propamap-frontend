import React from 'react';
import { Input } from 'antd';

import './TextField.scss';

const { TextArea } = Input;

const TextField = props => {
  // Events

  const _onChange = ev => {
    props.onChange(ev);
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
    <div className='cmp-text-field'>
      {props.showLabel ? (
        props.label ? (
          <label htmlFor={props.id}>{props.label}</label>
        ) : null
      ) : null}
      <TextArea {...commonProps} autoSize={props.autoSize} />
      {props.error ? (
        <div className='invalid-message'>{props.errorComputedMessage}</div>
      ) : null}
      {props.helpText ? (
        <small id={`${props.id}HelpBlock`}>{props.helpText}</small>
      ) : null}
    </div>
  );
};

TextField.defaultProps = {
  size: 'default',
  readOnly: false,
  errorComputedMessage: '',
  error: false,
  type: 'textarea',
  hidden: false,
  disabled: false,
  required: false,
  autoFocus: false,
  visibilityToggle: true,
  allowClear: true,
  showLabel: true,
  autoSize: { minRows: 4, maxRows: 8 }
};

export { TextField };
