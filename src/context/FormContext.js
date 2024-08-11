import { createContext, useContext, useState } from "react";
import { addons } from "../data/addons";

const FormContext = createContext(null);

const FormContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [isChecked, setIsChecked] = useState(false);
  const [addonsList, setAddonsList] = useState(addons);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateName = (newName) => setName(newName);
  const updateEmail = (newEmail) => setEmail(newEmail);
  const updatePhoneNumber = (newPhoneNumber) => setPhoneNumber(newPhoneNumber);
  const updateSelectedPlan = (newPlan) => setSelectedPlan(newPlan);
  const toggleIsChecked = () => setIsChecked((prev) => !prev);
  const updateAddonsList = (newAddOnsList) => setAddonsList(newAddOnsList);

  const value = {
    step,
    name,
    email,
    phoneNumber,
    selectedPlan,
    isChecked,
    addonsList,
    nextStep,
    prevStep,
    updateName,
    updateEmail,
    updatePhoneNumber,
    updateSelectedPlan,
    toggleIsChecked,
    updateAddonsList,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) throw new Error("useForm must be used in FormContextProvider");

  return context;
};

export default FormContextProvider;
