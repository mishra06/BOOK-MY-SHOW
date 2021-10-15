import React from "react";
import { Route } from "react-router-dom";


//layout
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC = ({component: Component, ...rest}) => {
    return (
    <>
    <Route 
    {...rest} 
    component={(props) => (
    <DefaultLayout>
        <Component {...props} /> 
    </DefaultLayout>
    )} 
  />
</>
 );
 };

export default DefaultHOC;