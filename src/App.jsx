import React, {useRef} from "react";
import MathCard from './MathCard.jsx';
import Button from 'react-bootstrap/Button';
import './App.css';


function App() {
  const childRef = useRef();
  const childRef2 = useRef();
  const childRef3 = useRef();
  const childRef4 = useRef();
  const childRef5 = useRef();
  const childRef6 = useRef();
  const childRef7 = useRef();
  const childRef8 = useRef();
  const childRef9 = useRef();
  const childRef10 = useRef();
  const childRef11 = useRef();
  const childRef12 = useRef();
  const childRef13 = useRef();
  const childRef14 = useRef();
  const childRef15 = useRef();
  const childRef16 = useRef();

  const handleParentClick = () =>{
    childRef.current.triggerButtonClick();
    childRef2.current.triggerButtonClick();
    childRef3.current.triggerButtonClick();
    childRef4.current.triggerButtonClick();
    childRef5.current.triggerButtonClick();
    childRef6.current.triggerButtonClick();
    childRef7.current.triggerButtonClick();
    childRef8.current.triggerButtonClick();
    childRef9.current.triggerButtonClick();
    childRef10.current.triggerButtonClick();
    childRef11.current.triggerButtonClick();
    childRef12.current.triggerButtonClick();
    childRef13.current.triggerButtonClick();
    childRef14.current.triggerButtonClick();
    childRef15.current.triggerButtonClick();
    childRef16.current.triggerButtonClick();
  };
  return (
    <div>
          <h1>Addition Cards</h1>
          <div className="d-flex justify-content-center"> 
              <Button variant="primary" onClick={ handleParentClick}>Generate New Numbers</Button>
          </div>
          <div className = "app-container">
              <MathCard ref={childRef}/>
              <MathCard ref={childRef2}/>
              <MathCard ref={childRef3}/>
              <MathCard ref={childRef4}/>
              <MathCard ref={childRef5}/>
              <MathCard ref={childRef6}/>
              <MathCard ref={childRef7}/>
              <MathCard ref={childRef8}/>
              <MathCard ref={childRef9}/>
              <MathCard ref={childRef10}/>
              <MathCard ref={childRef11}/>
              <MathCard ref={childRef12}/>
              <MathCard ref={childRef13}/>
              <MathCard ref={childRef14}/>
              <MathCard ref={childRef15}/>
              <MathCard ref={childRef16}/>
          </div>
    </div>
  )
}

export default App
