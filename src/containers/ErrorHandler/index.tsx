import React, { Component, ReactNode } from "react";
import ErrorDefault from "../Pages/ErrorPages/ErrorDefault";

interface IProps {
  children?: ReactNode;
};

interface IState {
  hasError: boolean;
};

class ErrorHandler extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false } as { hasError: boolean };
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorDefault />;
    }
    return this.props.children;
  };
};

export default ErrorHandler;
