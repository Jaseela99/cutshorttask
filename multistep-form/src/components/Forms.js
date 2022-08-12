import React from "react";
import Form1 from "./Form1";
import Stepper from "./Stepper";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Button from "./Button";
import Form4 from "./Form4";

const Forms = () => {
  const [currentStep,setCurrentStep]=React.useState(1)
  const steps=["1","2","3","4"]
  const showSteps=(step)=>{
    switch (step) {
      case 1:
        return <Form1/>
      case 2:
        return <Form2/>
      case 3:
        return <Form3/>
      case 4:
        return <Form4/>
      default:
    }
  }

  const handleClick=(flow)=>{
    let newStep = currentStep;
    flow = newStep++;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  return (
    <div className="h-screen w-full bg-white rounded-md shadow-md p-8">
      <h3 className="flex justify-center m-3 text-xl font-bold p-2">Eden</h3>
      <Stepper steps={steps} currentStep={currentStep}/>
      <div>{showSteps(currentStep)}</div>
      <Button handleClick={handleClick} 
      currentStep={currentStep}
      steps={steps}/>
    </div>
  );
};

export default Forms;
