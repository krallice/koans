import React from "react";
import KoanItem from "./KoanItem";

interface KoanListProps {
  koans?: string[];
}

const KoanList: React.FC<KoanListProps> = ({
  koans = [
    "Work the problem, not the emotion",
    "Every action is a vote for the type of person we wish to become.",
    "Replace the word 'have' with 'get'",
  ],
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 bg-white">
      <h1 className="text-3xl font-serif font-medium text-center mb-12 text-gray-900">
        Koans
      </h1>
      <div className="space-y-6">
        {koans.map((koan, index) => (
          <KoanItem key={index} text={koan} />
        ))}
      </div>
    </div>
  );
};

export default KoanList;
