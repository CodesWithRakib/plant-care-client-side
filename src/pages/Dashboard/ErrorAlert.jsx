import React from "react";
import { FiAlertCircle, FiX, FiRefreshCw } from "react-icons/fi";

const ErrorAlert = ({
  message = "Something went wrong",
  variant = "danger", // "danger" | "warning" | "info"
  onRetry,
  onDismiss,
  className = "",
  retryText = "Try again",
  dismissible = true,
}) => {
  const variantClasses = {
    danger:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200",
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200",
  };

  const iconClasses = {
    danger: "text-red-500 dark:text-red-300",
    warning: "text-yellow-500 dark:text-yellow-300",
    info: "text-blue-500 dark:text-blue-300",
  };

  return (
    <div
      className={`rounded-md border p-4 ${variantClasses[variant]} ${className}`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <FiAlertCircle
            className={`h-5 w-5 ${iconClasses[variant]}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium">{message}</h3>
          {onRetry && (
            <div className="mt-2 text-sm">
              <button
                type="button"
                onClick={onRetry}
                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                  variant === "danger"
                    ? "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-800/30 dark:text-red-200 dark:hover:bg-red-800/50"
                    : variant === "warning"
                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800/30 dark:text-yellow-200 dark:hover:bg-yellow-800/50"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800/30 dark:text-blue-200 dark:hover:bg-blue-800/50"
                }`}
              >
                <FiRefreshCw className="mr-1 h-3 w-3" />
                {retryText}
              </button>
            </div>
          )}
        </div>
        {dismissible && (
          <div className="ml-auto pl-3">
            <button
              type="button"
              onClick={onDismiss}
              className={`inline-flex rounded-md p-1.5 focus:outline-none ${
                variant === "danger"
                  ? "hover:bg-red-100 focus:ring-red-600 dark:hover:bg-red-800/30"
                  : variant === "warning"
                  ? "hover:bg-yellow-100 focus:ring-yellow-600 dark:hover:bg-yellow-800/30"
                  : "hover:bg-blue-100 focus:ring-blue-600 dark:hover:bg-blue-800/30"
              }`}
            >
              <FiX className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorAlert;
