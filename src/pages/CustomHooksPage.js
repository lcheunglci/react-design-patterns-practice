import React from "react";
import { CurrentUserInfo } from "../CustomHookComponents/CurrentUserInfo";
import { UserInfo } from "../CustomHookComponents/UserInfo";

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
        </>
    )
}

export default CustomHooksPage;