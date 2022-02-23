import React from "react";

export const ControlledOnboardingFlow = ({children, currentIndex, onNext, onFinish}) => {

    const goToNext = stepData => {
        onNext(stepData);

        if (currentIndex === children.length -1) {
            onFinish(stepData);
        }
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goToNext})
    }

    return (
        <>
        {currentChild}
        </>
    );
}