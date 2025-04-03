import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
 
function Contant() {
const [counting,setCounting]=useState(0)
const [isCounting, setIsCounting] = useState(true);
const [buttonText, setButtonText] = useState('Stop');
useEffect(()=>{
  let interval;

    if (isCounting) {
      interval = setInterval(() => {
        setCounting(prevCounting => prevCounting + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isCounting]);

  const stoporcon = () => {
    if (isCounting) {
      setIsCounting(false);
      setButtonText('Continue');
    } else {
      setIsCounting(true);
      setButtonText('Stop');
    }
}
const reset = () => {
  setCounting(0);
  setIsCounting(true); 
  setButtonText('Stop'); 
};
  return (
    <div className='text-center'>
  <div className='my-3 my-md-5'>
    <h1 className='display-4'>COUNTER</h1>
    <h4 className='display-2 fw-bold text-danger'>{counting}</h4>
  </div>
  <div className='d-flex flex-column flex-md-row justify-content-center align-items-center my-3 my-md-5'>
    <Button 
      variant={isCounting ? "danger" : "success"} 
      onClick={stoporcon} 
      className='m-2 w-25 w-md-25'
    >
      {buttonText}
    </Button>
    <Button 
      variant="info" 
      onClick={reset} 
      className='m-2 w-25 w-md-25'
    >
      Reset
    </Button>
  </div>
</div>
  )
}

export default Contant