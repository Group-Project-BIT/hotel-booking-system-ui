import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

 
export function StepperWithContent(props) {

  const handleNext = () => !props.isLastStep && props.setActiveStep((cur) => cur + 1);
  const handlePrev = () => !props.isFirstStep && props.setActiveStep((cur) => cur - 1);
 
  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={props.activeStep}
        isLastStep={(value) => props?.setIsLastStep(value)}
        isFirstStep={(value) => props?.setIsFirstStep(value)}
      >
        <Step onClick={() => props.setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={props.activeStep === 0 ? "blue-gray" : "gray"}
            >
              Step 1
            </Typography>
            <Typography
              color={props.activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography>
          </div>
        </Step>
        <Step onClick={() => props.setActiveStep(1)}>
          <CogIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={props.activeStep === 1 ? "blue-gray" : "gray"}
            >
              Step 2
            </Typography>
            <Typography
              color={props.activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography>
          </div>
        </Step>
        <Step onClick={() => props.setActiveStep(2)}>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={props.activeStep === 2 ? "blue-gray" : "gray"}
            >
              Step 3
            </Typography>
            <Typography
              color={props.activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography>
          </div>
        </Step>
      </Stepper>
      <div className="mt-32 flex justify-between">
        <Button onClick={handlePrev} disabled={props.isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={props.isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}