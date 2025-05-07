import React from "react";

interface KoanItemProps {
  text: string;
  author?: string;
  displayStyle?: "bullet" | "card";
}

const KoanItem = ({
  text = "The mind is everything. What you think you become.",
  displayStyle = "bullet",
}: KoanItemProps) => {
  return (
    <div
      className={`bg-white ${displayStyle === "card" ? "p-6 border border-gray-100 rounded-lg shadow-sm" : ""}`}
    >
      <div className="flex items-start">
        {displayStyle === "bullet" && (
          <span className="text-xl mr-3 font-serif text-black">•</span>
        )}
        <div>
          <p className="font-serif text-lg md:text-xl text-black leading-relaxed mb-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KoanItem;
