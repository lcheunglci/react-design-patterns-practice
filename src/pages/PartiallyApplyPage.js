import React from "react";
import { DangerButton, BigSuccessButton } from "../PartiallyAppliedComponents/partiallyApply";

const PartiallyApplyPage = () => (
    <>
    <h1>Partially Apply Component</h1>
    <DangerButton text="DO NOT PRESS" />
    <BigSuccessButton text="Congratulations" />
    </>
)

export default PartiallyApplyPage;