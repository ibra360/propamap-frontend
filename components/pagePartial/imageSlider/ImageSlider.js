import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './ImageSlider.scss';

const ImageSlider = (props) => {
  return (
    <div className='cmp-img-slider'>
      <Carousel
        useKeyboardArrows={true}
        showIndicators={false}
        showStatus={false}>
        {props.images && props.images.length > 0 ? (
          props.images.map((value) => (
            <div>
              <img alt='example' src={value} />
            </div>
          ))
        ) : (
          <div>
            <img alt='example' src='/images/default-image.jpg' />
          </div>
        )}
      </Carousel>
    </div>
  );
};

export { ImageSlider };
