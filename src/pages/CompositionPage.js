import React from "react";
import { BigSuccessButton, DangerButton } from "../CompositionComponents/composition";

const CompositionPage  = () => (
    <>
    <h1>Composition Component</h1>
    <DangerButton text="DO NOT PRESS" />
    <BigSuccessButton text="Congratulations" />
    </>
)

export default CompositionPage;