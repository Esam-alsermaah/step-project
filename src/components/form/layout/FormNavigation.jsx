import { useForm } from "../../../context/FormContext";
import { steps } from "../../../data/steps";
import Nav from "../../Nav";
import StepHeader from "../../StepHeader";

// The task of this component to render the side navigation only.

const FormNavigation = () => {
  const { step } = useForm();

  return (
    <Nav>
      {steps.map((currentStep) => (
        <StepHeader
          isActive={currentStep.number === step}
          title={currentStep.navigationTitle}
          step={currentStep.number}
          key={currentStep.number}
        />
      ))}
    </Nav>
  );
};

export default FormNavigation;
