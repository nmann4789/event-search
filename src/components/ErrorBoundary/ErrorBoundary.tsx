import * as React from "react";
import { ErrorSplash } from "../ErrorSplash/ErrorSplash";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  //TODO Use logError when implementing Sentry
  //logError: (error: Error, errorInfo: React.ErrorInfo) => void
  errorContent?: (error: Error, errorInfo?: React.ErrorInfo) => React.ReactNode;
};

type ErrorBoundaryState = {
  error?: Error;
  errorInfo?: React.ErrorInfo;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  readonly state: ErrorBoundaryState = {
    error: undefined,
    errorInfo: undefined,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    //TODO Use logError when implementing Sentry
    //this.props.logError(error, errorInfo)
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorSplash headline="Something is very wrong" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
