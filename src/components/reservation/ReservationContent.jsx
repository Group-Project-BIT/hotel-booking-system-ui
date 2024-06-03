import React from 'react'
import { Button} from "@material-tailwind/react";
import FirstStepContainer from './FirstStepContainer'
import SecondStepContainer from './SecondStepContainer'
import { ThirdStepContainer } from './ThirdStepContainer'
import FourthStepContainer from './FourthStepContainer'

const ReservationContent = (props) => {
  
  const handleNext = () => !props.isLastStep && props.setActiveStep((cur) => cur + 1);
  const handlePrev = () => !props.isFirstStep && props.setActiveStep((cur) => cur - 1);
  return (
    <div>
        <div>
          {props.activeStep == 0 && <FirstStepContainer/>}
          {props.activeStep == 1 && <SecondStepContainer/>}
          {props.activeStep == 2 && <ThirdStepContainer/>}
          {props.activeStep == 3 && <FourthStepContainer/>}
        </div>
        <div className="mt-32 flex justify-between">
          <Button onClick={handlePrev} disabled={props.isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={props.isLastStep}>
            Next
          </Button>
    </div>
    </div>
    
  )
}

export default ReservationContent