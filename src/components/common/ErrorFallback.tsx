import React, { FC } from "react";

interface ErrorFallbackProps<ErrorType extends Error = Error> {
  error: ErrorType;
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
