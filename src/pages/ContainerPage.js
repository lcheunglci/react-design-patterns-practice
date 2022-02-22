import React from "react";
import { CurrentUserLoader } from "../ContainerComponents/CurrentUserLoader";
import { UserInfo } from "../ContainerComponents/UserInfo";

const ContainerPage = () => (
    <>
    
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>

    </>
)

export default ContainerPage;