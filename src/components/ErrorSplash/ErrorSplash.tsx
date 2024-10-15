import * as React from "react";
import {useEffect} from "react";

type ErrorSplashProps = {
  headline?: string;
  details?: any;
};

export const ErrorSplash = (props: ErrorSplashProps) => {
  const {
    details = "Full error details here",
    headline = "You have encountered an error.",
  } = props;
  return (
    <div className="flex flex-col bg-rose-300">
      <h1>{headline}</h1>
      <p>{details}</p>
      <button>Reload</button>
    </div>
  );
};
