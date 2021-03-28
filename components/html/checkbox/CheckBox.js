import React, { useState } from 'react';
import { Checkbox } from 'antd';

import './CheckBox.scss';

const { Group } = Checkbox;

const CheckBox = props => {
  // State

  const [indeterminate, setIndeterminate] = useState(props.indeterminate);

  // Events

  const _onChange = ev => {
    if (indeterminate) {
      setIndeterminate(false);
    }
    props.onChange(ev);
  };

  // Render

  return (
    <div className='cmp-check-box'>
      <Checkbox
        className={props.className}
        autoFocus={props.autoFocus}
        checked={props.value}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        indeterminate={indeterminate}
        onChange={_onChange}
        value={props.value}
        name={props.id}
        id={props.id}>
        {props.title}
      </Checkbox>
      {props.error ? (
        <div className='invalid-message'>{props.errorComputedMessage}</div>
      ) : null}
    </div>
  );
};

const CheckBoxGroup = props => {
  // State

  const [checkedList, setCheckedList] = useState(props.checkedList);

  // Events

  const _onChange = checkedList => {
    setCheckedList(checkedList);

    props.onChange(checkedList);
  };

  // Render

  return (
    <div className='cmp-check-box-group'>
      <Group
        className={props.className}
        options={props.options}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        name={props.name}
        value={checkedList}
        onChange={_onChange}
      />
    </div>
  );
};

CheckBoxGroup.defaultProps = {
  className: ''
};

CheckBox.defaultProps = {
  className: '',
  id: '',
  title: '',
  value: false
};

export { CheckBox, CheckBoxGroup };
