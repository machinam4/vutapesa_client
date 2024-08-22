import { Skeleton, Space } from "antd";
import React from "react";

function LandingPage() {
  const loading = true;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="w-64 h-40">
        {loading ? (
          <Skeleton.Image
            style={{ width: 200, height: 150 }}
            active={loading}
          />
        ) : (
          <Image
            className="w-full h-full object-cover"
            src="https://via.placeholder.com/200x150"
            alt="Example"
          />
        )}
      </div>

      <div className="w-64 h-40">
        {loading ? (
          <Skeleton.Image className="w-full h-full" active={loading} />
        ) : (
          <Image
            className="w-full h-full object-cover"
            src="https://via.placeholder.com/200x150"
            alt="Example"
          />
        )}
      </div>
    </div>
  );
}

export default LandingPage;
