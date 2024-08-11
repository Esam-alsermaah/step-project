import { useForm } from "../../../context/FormContext";
import { plans } from "../../../data/plans";
import Card from "../../Card";
import Toggle from "../../Toggel";

export default function Selected() {
  const { updateSelectedPlan, isChecked, toggleIsChecked, selectedPlan } =
    useForm();

  return (
    <>
      <div className="cards">
        {plans.map((plan) => (
          <Card
            plan={plan}
            isChecked={isChecked}
            selectedPlan={selectedPlan}
            setSelectedPlan={updateSelectedPlan}
            key={plan.name}
          />
        ))}
      </div>

      <div className="monthly-yearly">
        <p className={!isChecked ? "periodSelected" : "noPeriodSelected"}>
          Monthly
        </p>
        <Toggle isChecked={isChecked} setIsChecked={toggleIsChecked} />
        <p className={isChecked ? "periodSelected" : "noPeriodSelected"}>
          Yearly
        </p>
      </div>
    </>
  );
}
