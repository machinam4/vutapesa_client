import { Skeleton } from "antd";
import React from "react";

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
      {[...Array(24)].map((_, index) => (
        <div key={index} className="">
          <Skeleton
            className="bg-background rounded-md w-full md:h-48"
            active
          />
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
