import React ,{ useEffect, useState, useRef }from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    const stepState = steps.map((step, index) => 
    Object.assign(
        {},
        {
          step: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      ),
    )
    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative text-indigo-600 flex flex-col items-center">
          <div
            className={`rounded-full transition-500 ease-in-out border-2 border-gray-300 h-10 w-10 flex items-center justify-center py-3 ${
               step.selected
                ? "bg-indigo-500 text-white  border border-indigo-500"
                : ""
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">{index + 1}</span>
            ) : (
              index + 1
            )}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-indigo-500" : "border-gray-200"
          }`}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
