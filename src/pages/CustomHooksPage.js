import React from "react";
import { CurrentUserInfo } from "../CustomHookComponents/CurrentUserInfo";
import { UserInfo } from "../CustomHookComponents/UserInfo";
import { ResourceUserInfo } from "../CustomHookComponents/ResourceUserInfo";
import { ResourceProductInfo } from "../CustomHookComponents/ResourceProductInfo"

const CustomHooksPage = () => {

    return (
        <>
        <h1>Custom Hook Page</h1>
        <h2>useCurrentUser custom hook</h2>
        <CurrentUserInfo />
        <h2>useUser custom hook</h2>
        <UserInfo userId="123" />
        <UserInfo userId="234" />
        <UserInfo userId="345" />
        <h2>useResource custom hook</h2>
        <ResourceUserInfo userId="234" />
        <ResourceProductInfo productId="1234" />
        </>
    )
}

export default CustomHooksPage;