import { ControlledForm } from "../ControlledComponents/ControlledForm";
import { ControlledModal } from "../ControlledComponents/ControlledModal";
import { ControlledOnboardingFlow } from "../ControlledComponents/ControlledOnboardingFlow";
import React, {useState} from "react";

export const ControlledPage = () => {

    const [shouldShowModal, setShouldShowModal] = useState(false);

    const StepOne = ( {goToNext}) => (
        <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({name: 'John Doe'})}>Next</button>
        </>
    );
    const StepTwo = ( {goToNext}) => (
        <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({age:100})}>Next</button>
        </>
    );
    const StepThree = ( {goToNext}) => (
        <>
        <h1>Step 3</h1>
        <p>Congratulations! You qualify for your senior discount.</p>
        <button onClick={() => goToNext({})}>Next</button>
        </>
    );

    const StepFour = ( {goToNext}) => (
        <>
        <h1>Step 4</h1>
        <button onClick={() => goToNext({hairColor: 'brown'})}>Next</button>
        </>
    );

    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = stepData => {
        setOnboardingData({
            ...onboardingData,
            ...stepData
        });

        setCurrentIndex(currentIndex + 1);
    }


    return (
        <>
            <h1>Controlled Form</h1>
            <ControlledForm />
            <h1>Controlled Modal</h1>
            <button onClick={() => setShouldShowModal(!shouldShowModal)}>
                {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
            </button>
            <ControlledModal 
                shouldShow={shouldShowModal}
                onRequestClose={() => {setShouldShowModal(false)}
            }>
            <h1>Hello</h1>
            </ControlledModal>
            <h1>Controlled onboarding flow</h1>
            <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext} onFinish={(data)=> {
                console.log(data);
                alert('Onboarding complete');
            }}>
                <StepOne />
                <StepTwo />
                { onboardingData.age > 62 && <StepThree /> }
                <StepFour />
            </ControlledOnboardingFlow>

        </>
    );
};