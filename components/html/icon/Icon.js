import React, { useState } from 'react';
import './Icon.scss';

const Icon = props => {
  const [style, setStyle] = useState({
    type:
      props.type === 'solid'
        ? 's'
        : props.type === 'regular'
        ? 'r'
        : props.type === 'light'
        ? 'l'
        : props.type === 'duotone'
        ? 'd'
        : props.type === 'brand'
        ? 'b'
        : ''
  });

  return (
    <span className='cmp-icon'>
      <i
        style={{ fontSize: `${props.size}rem`, color: props.color }}
        className={`icon ${props.className} fa${style.type} fa-${props.icon}`}
      />
    </span>
  );
};

Icon.defaultProps = {
  size: 1,
  className: '',
  type: 'solid'
};

export { Icon };
