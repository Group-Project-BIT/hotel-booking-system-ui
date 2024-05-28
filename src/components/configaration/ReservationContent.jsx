import React from 'react'
import FirstStepContainer from './FirstStepContainer'
import SecondStepContainer from './SecondStepContainer'
import { ThirdStepContainer } from './ThirdStepContainer'

const ReservationContent = (props) => {
  return (
    <div>
        {props.activeStep == 0 && <FirstStepContainer/>}
        {props.activeStep == 1 &&<SecondStepContainer/>}
        {props.activeStep == 2 &&<ThirdStepContainer/>}

    </div>
  )
}

export default ReservationContent