import React, { useState, useEffect } from "react";

/**
 * A component that wraps its children and detects potential infinite rendering loops
 */
const StackTraceDebugger: React.FC<{
  componentName: string;
  children: React.ReactNode;
  renderLimit?: number;
}> = ({ componentName, children, renderLimit = 50 }) => {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prev) => {
      const newCount = prev + 1;
      if (newCount > renderLimit) {
        console.warn(
          `⚠️ Potential infinite rendering in component "${componentName}"! ` +
            `Rendered ${newCount} times. Consider using React.memo or check for state updates causing re-renders.`,
        );
        console.trace("Component render stack trace:");
      }
      return newCount;
    });

    // Clean up effect when component unmounts
    return () => {
      if (renderCount > renderLimit) {
        console.info(
          `Component "${componentName}" unmounted after ${renderCount} renders.`,
        );
      }
    };
  }, [componentName, renderLimit, renderCount]);

  // Safe rendering - return children as is
  return <>{children}</>;
};

export default StackTraceDebugger;
