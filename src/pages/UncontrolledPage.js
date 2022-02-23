import { UncontrolledForm } from "../UncontrolledComponents/UncontrolledForm";
import { UncontrolledModal } from "../UncontrolledComponents/UncontrolledModal";
import React from "react";

export const UncontrolledPage = () => {

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <UncontrolledForm />
            <h1>Uncontrolled Modal</h1>
            <UncontrolledModal />
        </>
        
    );
};