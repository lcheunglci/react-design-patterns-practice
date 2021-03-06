import React from "react";
import { CurrentUserLoader } from "../ContainerComponents/CurrentUserLoader";
import { UserLoader } from "../ContainerComponents/UserLoader";
import { UserInfo } from "../ContainerComponents/UserInfo";
import { ProductInfo } from "../ContainerComponents/ProductInfo";
import { ResourceLoader } from "../ContainerComponents/ResourceLoader";
import { DataSource } from "../ContainerComponents/DataSource";
import axios from "axios";

const ContainerPage = () => {

    const getServerData = url => async () => {
            const response = await axios.get(url);
            return response.data;
    }

    const getLocalStorageData = key => () => {
        return localStorage.getItem(key);
    }

    const Text = ( {message} ) => <h1>{message}</h1>;

    return (
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
            <h2>Data Source component</h2>
            <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
                <UserInfo />
            </DataSource>
            <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
                <Text/>
            </DataSource>
        </>
    )
    }
export default ContainerPage;