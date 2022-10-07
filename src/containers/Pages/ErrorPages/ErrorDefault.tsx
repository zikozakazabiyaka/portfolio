import React from "react";

import ErrorPage from "../../../components/ErrorPage";
import errorOops from "../../../images/oops.jpg";

const ErrorDefault = () => (
  <ErrorPage title="Something went wrong" image={errorOops} />
);

export default ErrorDefault;
