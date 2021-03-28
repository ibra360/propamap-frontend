import React from 'react';
import { Button as ButtonComponent } from 'antd';

import './Button.scss';
import { Icon } from '../icon/Icon';

const { Group } = ButtonComponent;

const Button = props => {
  // Events

  const _onClick = ev => {
    if (props.onClick) {
      props.onClick(ev);
    }
  };

  // Render

  return (
    <div
      className='cmp-button'
      style={{ display: props.inline ? 'inline' : 'block' }}>
      <ButtonComponent
        disabled={props.disabled}
        ghost={props.ghost}
        href={props.href}
        htmlType={props.type}
        loading={props.loading}
        shape={props.shape}
        size={props.size}
        hidden={props.hidden}
        target={props.target}
        type={props.category}
        className={props.className}
        onClick={_onClick}
        block={props.block}
        id={props.id}>
        {props.icon && <Icon icon={props.icon} type={props.iconType} color={props.color}/>}
        {props.title}
      </ButtonComponent>
    </div>
  );
};

const ButtonGroup = props => {
  //Render

  return (
    <div id={props.id} className={`cmp-button-group ${props.className}`}>
      <Group size={props.size}>
        {props.buttons.map((button, key) => {
          return <Button key={key} {...button} />;
        })}
      </Group>
    </div>
  );
};

Button.defaultProps = {
  id: '',
  title: '',
  type: 'button',
  className: '',
  hidden: false,
  size: 'default',
  category: ''
};

ButtonGroup.defaultProps = {
  id: '',
  className: '',
  size: 'default'
};

export { Button, ButtonGroup };
