import MultiStepForm from "./components/form/MultiStepForm";
import FormContextProvider from "./context/FormContext";

function App() {
  return (
    <FormContextProvider>
      <MultiStepForm />
    </FormContextProvider>
  );
}

export default App;
