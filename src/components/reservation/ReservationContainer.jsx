import React, { useState } from "react";
import { StepperWithContent } from "./StepperWithContent";
import ReservationContent from "./ReservationContent";

export const ReservationContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-full"
    style={{paddingLeft:"15%", paddingRight:"15%"}}>
      <StepperWithContent
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        isLastStep={isLastStep}
        setIsLastStep={setIsLastStep}
        isFirstStep={isFirstStep}
        setIsFirstStep={setIsFirstStep}
      />
      <ReservationContent 
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      isLastStep={isLastStep}
      setIsLastStep={setIsLastStep}
      isFirstStep={isFirstStep}
      setIsFirstStep={setIsFirstStep}/>
    </div>
  );
};
