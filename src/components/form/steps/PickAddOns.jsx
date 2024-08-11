import { useForm } from "../../../context/FormContext";
import Addons from "../../Addons";

export default function PickAddOns() {
  const { updateAddonsList, addonsList, isChecked } = useForm();

  const toggleSelected = (name) => {
    const updatedAddOnsList = addonsList.map((addOn) =>
      addOn.name === name ? { ...addOn, selected: !addOn.selected } : addOn
    );
    updateAddonsList(updatedAddOnsList);
  };

  return (
    <div className="PickAddOns">
      {addonsList.map((addons) => (
        <Addons
          addons={addons}
          key={addons.name}
          AddOnsList={addonsList}
          setAddOnsList={updateAddonsList}
          toggleSelected={toggleSelected}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
}
