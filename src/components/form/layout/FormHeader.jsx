import { useForm } from "../../../context/FormContext";
import { steps } from "../../../data/steps";
import Header from "../../Header";

// The task of this component to render the header only.

const FormHeader = () => {
  const { step } = useForm();

  return steps.map(
    (currentStep) =>
      currentStep.number === step && (
        <Header
          title={currentStep.title}
          info={currentStep.info}
          key={currentStep.number}
        />
      )
  );
};

export default FormHeader;
