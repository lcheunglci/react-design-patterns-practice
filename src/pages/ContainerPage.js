import React from "react";
import { CurrentUserLoader } from "../ContainerComponents/CurrentUserLoader";
import { UserInfo } from "../ContainerComponents/UserInfo";

const ContainerPage = () => (
    <>
        <h1>Container examples</h1>
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>

    </>
)

export default ContainerPage;