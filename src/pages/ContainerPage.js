import React from "react";
import { CurrentUserLoader } from "../ContainerComponents/CurrentUserLoader";
import { UserLoader } from "../ContainerComponents/UserLoader";
import { UserInfo } from "../ContainerComponents/UserInfo";
import { ProductInfo } from "../ContainerComponents/ProductInfo";
import { ResourceLoader } from "../ContainerComponents/ResourceLoader";

const ContainerPage = () => (
    <>
        <h1>Container examples</h1>
        <h2>Current User Loader component</h2>
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
        <h2>User Loader component</h2>
        <UserLoader userId={123}>
            <UserInfo />
        </UserLoader>
        <UserLoader userId={234}>
            <UserInfo />
        </UserLoader>
        <UserLoader userId={345}>
            <UserInfo />
        </UserLoader>
        <h2>Resource Loader component</h2>
        <ResourceLoader resourceName="user" resourceUrl="/users/123">
            <UserInfo />
        </ResourceLoader>
        <ResourceLoader resourceName="user" resourceUrl="/products/1234">
            <ProductInfo />
        </ResourceLoader>

    </>
)

export default ContainerPage;