import React from "react";
import { CurrentUserLoader } from "../ContainerComponents/CurrentUserLoader";
import { UserLoader } from "../ContainerComponents/UserLoader";
import { UserInfo } from "../ContainerComponents/UserInfo";

const ContainerPage = () => (
    <>
        <h1>Container examples</h1>
        <h2>Current User component</h2>
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
        <h2>User component</h2>
        <UserLoader userId={123}>
            <UserInfo />
        </UserLoader>
        <UserLoader userId={234}>
            <UserInfo />
        </UserLoader>
        <UserLoader userId={345}>
            <UserInfo />
        </UserLoader>

    </>
)

export default ContainerPage;