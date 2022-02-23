import { UncontrolledForm } from "../UncontrolledComponents/UncontrolledForm";
import { UncontrolledModal } from "../UncontrolledComponents/UncontrolledModal";
import { UncontrolledOnboardingFlow } from "../UncontrolledComponents/UncontrolledOnboardingFlow";
import React from "react";

export const UncontrolledPage = () => {

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
        <button onClick={() => goToNext({hairColor: 'brown'})}>Next</button>
        </>
    );    
    return (
        <>
            <h1>Uncontrolled Form</h1>
            <UncontrolledForm />
            <h1>Uncontrolled Modal</h1>
            <UncontrolledModal />
            <h1>Uncontrolled Onboarding Flow</h1>
            <UncontrolledOnboardingFlow onFinish={
                data => {
                    console.log(data);
                    alert('Onboarding complete');
                }}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>
            
        </>
        
    );
};