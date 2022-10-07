import React, { ReactElement, ReactNode } from "react";
import { useParams } from "react-router";
import Error404 from "./Pages/ErrorPages/Error404";

const ValidateRoute = ({ children } : { children: ReactElement}) => {
  const params = useParams();
  const values = Object.values(params);
  const id = values[0];

  if (!/\d+/.test(id as string)) {
    debugger
    return <Error404 />;
  }
  return children;
};

export default ValidateRoute;
