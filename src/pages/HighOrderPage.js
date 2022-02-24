import React from "react";
import { printProps } from "../HighOrderComponents/printProps";
import { UserInfo } from "../ContainerComponents/UserInfo";

const UserInfoWrapped = printProps(UserInfo);

const HighOrderPage = () => {

    return (
        <>
        <h1>High Order Components</h1>
        <UserInfoWrapped a={1} b="Hello" c={{name:"Bob"}} />
        </>
    );
}

export default HighOrderPage;