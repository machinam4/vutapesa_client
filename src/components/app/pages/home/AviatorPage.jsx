import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../../sections/LoadingSkeleton";
import PrimaryButton from "../../sections/PrimaryButton";
import SecondaryButton from "../../sections/SecondaryButton";

function AviatorPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate 2 seconds loading
  }, []);

  return (
    <div className="p-2">
      {/* Repeat grid items */}
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {[...Array(17)].map((_, index) => (
            <div className="relative w-full md:h-48 rounded-md overflow-hidden group">
              <img
                key={index}
                className="w-full h-full object-cover transition duration-300"
                src={`/games/${index}.webp`}
                alt="Game Example"
              />
              <div className="absolute inset-0 bg-body bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white space-x-4">
                  <PrimaryButton>Play</PrimaryButton>
                  <SecondaryButton>Practice</SecondaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default AviatorPage;
