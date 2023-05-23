import React, { useRef } from 'react';

const FlipCamButton = React.forwardRef((props, ref) => {
  const handleClick = () => {
    if (ref.current) {
      ref.current.classList.toggle('flipped');
    }
  };

  return (
    <div ref={ref} onClick={handleClick} className='FlipCamButton'>
      Flip Camera
    </div>
  );
});

export default FlipCamButton;
