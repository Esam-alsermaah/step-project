import { useMemo } from "react";
import { useForm } from "../../../context/FormContext";
import { plans } from "../../../data/plans";
import Separator from "../../Separator";

export default function Summary() {
  const { selectedPlan, isChecked, addonsList } = useForm();

  // Find the selected plan data
  const selectedPlanData = useMemo(() => {
    return plans.find((plan) => plan.name === selectedPlan);
  }, [selectedPlan]);

  // Calculate the total price of the selected plan
  const planPrice = isChecked
    ? selectedPlanData.priceYearly
    : selectedPlanData.priceMonthly;

  const selectedAddons = useMemo(() => {
    return addonsList.filter((addOn) => addOn.selected === true);
  }, [addonsList]);

  // Calculate the total price of selected add-ons
  const addOnsPrice = useMemo(() => {
    return selectedAddons.reduce((total, selectedAddOn) => {
      return (
        total +
        (isChecked ? selectedAddOn.priceYearly : selectedAddOn.priceMonthly)
      );
    }, 0);
  }, [isChecked, selectedAddons]);

  // Calculate the total price based on billing frequency
  const yearlyTotalPrice = planPrice + addOnsPrice;
  const monthlyTotalPrice = isChecked
    ? yearlyTotalPrice / 12
    : yearlyTotalPrice;

  const unit = isChecked ? "year" : "month";

  return (
    <>
      <div className="summaryBox">
        <SelectedPlan selectedPlan={selectedPlan} unit={unit} />
        {selectedAddons.length > 0 && <Separator />}
        {selectedAddons.map((addon) => {
          const price = isChecked ? addon.priceYearly : addon.priceMonthly;
          return <SelectedAddon name={addon.name} price={price} unit={unit} />;
        })}
      </div>
      <TotalPrice
        total={isChecked ? yearlyTotalPrice : monthlyTotalPrice}
        unit={unit}
      />
    </>
  );
}

const SelectedPlan = ({ unit, selectedPlan }) => {
  return (
    <div className="row">
      <div>
        <div>
          <strong>
            {selectedPlan} ({unit === "year" ? "Yearly" : "Monthly"})
          </strong>
        </div>
        <p className="change">Change</p>
      </div>
      <div className="Price">
        <strong>
          {selectedPlan &&
            (unit === "yearly"
              ? `$${
                  plans.find((plan) => plan.name === selectedPlan)?.priceYearly
                }/yr`
              : `$${
                  plans.find((plan) => plan.name === selectedPlan)?.priceMonthly
                }/mo`)}
        </strong>
      </div>
    </div>
  );
};

const SelectedAddon = ({ name, price, unit }) => {
  return (
    <div className="row">
      <p>{name}</p>
      <div className="Price">
        {unit === "year" ? `$${price}/yr` : `$${price}/mo`}
      </div>
    </div>
  );
};

const TotalPrice = ({ total, unit }) => {
  return (
    <div className="total row">
      <p>Total per {unit}</p>
      <div className="totalPrice">
        {unit === "year" ? `$${total}/yr` : `$${total}/mo`}
      </div>
    </div>
  );
};
