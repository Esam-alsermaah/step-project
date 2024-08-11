import Container from './componit/Continer';

import Nav from './componit/Nav';
import { data } from './data';
import Step from './componit/Step';
import { useState } from 'react';
import Header from './componit/Header';
import PersnolForm from './bags/PersnolForm';
import Button from './componit/Button'
import { plans } from './plans';
import { PickAddOnsList } from './PickAddOnsList';
import Selected from './bags/Selected';
import PickAddOns from './bags/PickAddOns';
import Summary from './bags/Summary';
import ThankYou from './bags/ThankYou';
function App() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState('Arcade')
  const [isChecked, setIsChecked] = useState(false);
  const [AddOnsList, setAddOnsList] = useState(PickAddOnsList)

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 5) setStep((s) => s + 1);
  }
  function handlePrev(e) {
    e.preventDefault();
    if (step > 1) setStep((s) => s - 1);
  }
  function toggleSelected(name) {
    setAddOnsList(AddOns => AddOns.map(AddOns => AddOns.name === name ? { ...AddOns, selected: !AddOns.selected } : AddOns))

  }
  return <Container>
      <Nav>
        {data.map(item =>(
          <Step curstep={item.step} step={step} key={item.step} />
        ))} 
        
      </Nav>
      <main >
              {data.map(item => item.step === step && <Header title={item.title} info={item.info} key={item.step} />)}
            <div>
              <div className='main-content'>
                {step===1&&<PersnolForm
                    step={step}
                    handleNext={handleNext}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                  />}
                  {step===2&&<Selected 
                  selectedPlan={selectedPlan}
                  setSelectedPlan={setSelectedPlan}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  plans={plans}
                  />}
                   {step === 3 && <PickAddOns
                      AddOnsList={AddOnsList}
                      setAddOnsList={setAddOnsList}
                      PickAddOnsList={PickAddOnsList}
                      toggleSelected={toggleSelected}
                      isChecked={isChecked}
                    />}
                     {step === 4 && <Summary
                      plans={plans}
                      selectedPlan={selectedPlan}
                      isChecked={isChecked}
                      AddOnsList={AddOnsList}
                    />}
                  {step === 5 && <ThankYou />}
                </div>
                   <div className="buttons">
                        {(step > 1 && step < 5) && <Button className='btn-secondary' onClick={handlePrev}>Go Back</Button>
                        }
                        {(step < 4) && <Button className='btn-primary' onClick={handleNext}>Next Step</Button>}
                        {step === 4 && <Button className='btn-confirm' onClick={handleNext}>Confirm</Button>}
                    </div>
              </div>
      </main>
            
      

    
    </Container>
  
  

}

export default App;
