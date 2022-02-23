import { ControlledForm } from "../ControlledComponents/ControlledForm";
import { ControlledModal } from "../ControlledComponents/ControlledModal";
import React, {useState} from "react";

export const ControlledPage = () => {

    const [shouldShowModal, setShouldShowModal] = useState(false);

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
        </>
    );
};