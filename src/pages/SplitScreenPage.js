import React from "react";
import { SplitScreen } from "../LayoutComponents/SplitScreen";

const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}!</h1>;
}

const RightHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}}!</p>
}

const SplitScreenPage = () => {

    return (
        <>
        <SplitScreen
         leftWeight={1} rightWeight={3}>
           <LeftHandComponent name="Bob's menu" />
           <RightHandComponent message="Hello world!" />
        </SplitScreen>
        
        </>
    );
}

export default SplitScreenPage;