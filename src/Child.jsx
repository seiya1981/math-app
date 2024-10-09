import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {

  const handleChildClick = () => {
    alert('Child function called!');
  };

  useImperativeHandle(ref, () => ({
    callChildFunction: handleChildClick,
  }));

  return (
    <button onClick={handleChildClick}>Click me (Child)</button>
  );
});

export default ChildComponent;