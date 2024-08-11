// Context
import { useForm } from "../../context/FormContext";

// Layout
import Button from "../Button";
import Container from "../Continer";
import FormHeader from "./layout/FormHeader";
import FormNavigation from "./layout/FormNavigation";

// Steps
import PersnolForm from "./steps/PersnolForm";
import PickAddOns from "./steps/PickAddOns";
import Selected from "./steps/Selected";
import Summary from "./steps/Summary";
import ThankYou from "./steps/ThankYou";

// All steps in order
const STEPS = [PersnolForm, Selected, PickAddOns, Summary, ThankYou];

function MultiStepForm() {
  const { step, nextStep, prevStep } = useForm();

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 5) nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (step > 1) prevStep();
  };

  // The current step using the state tracked in the form context
  const CurrentStep = STEPS[step - 1];

  return (
    <Container>
      <FormNavigation />
      <main>
        <FormHeader />
        <div>
          <div className="main-content">
            <CurrentStep />
          </div>
          <div className="buttons">
            {step > 1 && step < 5 && (
              <Button className="btn-secondary" onClick={handlePrev}>
                Go Back
              </Button>
            )}
            {step <= 4 ? (
              <Button className="btn-primary" onClick={handleNext}>
                {step < 4 ? "Next Step" : "Confirm"}
              </Button>
            ) : null}
          </div>
        </div>
      </main>
    </Container>
  );
}

export default MultiStepForm;
