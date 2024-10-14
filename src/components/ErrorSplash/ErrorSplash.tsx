import * as React from "react";

type ErrorSplashProps = {
  headline?: string;
  details?: string;
};

export const ErrorSplash = (props: ErrorSplashProps) => {
  const {
    details = "Full error details here",
    headline = "You have encountered an error.",
  } = props;
  return (
    <div>
      <h1>{headline}</h1>
      <p>{details}</p>
      <button>Reload</button>
    </div>
  );
};
