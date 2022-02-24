import React from "react";
import { printProps } from "../HighOrderComponents/printProps";
import { UserInfo } from "../ContainerComponents/UserInfo";
import { withUser } from "../HighOrderComponents/withUser";
import { UserInfoForm } from "../HighOrderComponents/UserInfoForm";

const UserInfoWrapped = printProps(UserInfo);

const UserInfoWithLoader = withUser(UserInfo, '234');

const HighOrderPage = () => {

    return (
        <>
        <h1>High Order Components</h1>
        <h2>prints props</h2>
        <UserInfoWrapped a={1} b="Hello" c={{name:"Bob"}} />
        <h2>with user</h2>
        <UserInfoWithLoader />
        <h2>with Editable User</h2>
        <UserInfoForm />
        </>
    );
}

export default HighOrderPage;