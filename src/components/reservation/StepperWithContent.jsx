import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

 
export function StepperWithContent(props) {
  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={props.activeStep}
        isLastStep={(value) => props?.setIsLastStep(value)}
        isFirstStep={(value) => props?.setIsFirstStep(value)}
      >
        <Step onClick={() => props.setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={props.activeStep === 0 ? "blue-gray" : "gray"}
            >
            Find a Room
            </Typography>
          </div>
        </Step>
        <Step onClick={() => props.setActiveStep(1)}>
          <CogIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={props.activeStep === 1 ? "blue-gray" : "gray"}
            >
            Add-ons
            </Typography>
          </div>
        </Step>
        <Step onClick={() => props.setActiveStep(2)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={props.activeStep === 2 ? "blue-gray" : "gray"}
            >
            Customer Information
            </Typography>
            
          </div>
        </Step>
        <Step onClick={() => props.setActiveStep(3)}>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={props.activeStep === 3 ? "blue-gray" : "gray"}
            >
            Confirmation
            </Typography>
          </div>
        </Step>
      </Stepper>
      <div className="mt-32 flex justify-between">
        
      
      </div>
    </div>
  );
}