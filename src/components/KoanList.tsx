import React from "react";
import KoanItem from "./KoanItem";

interface KoanListProps {
  koans?: string[];
}

const KoanList: React.FC<KoanListProps> = ({
  koans = [
    "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water.",
    "The obstacle is the path.",
    "When the student is ready, the teacher will appear.",
    "If you meet the Buddha on the road, kill him.",
    "The finger pointing to the moon is not the moon.",
    "To know and not to act is not to know.",
    "The journey of a thousand miles begins with a single step.",
  ],
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 bg-white">
      <h1 className="text-3xl font-serif font-medium text-center mb-12 text-gray-900">
        Koans
      </h1>
      <div className="space-y-8">
        {koans.map((koan, index) => (
          <KoanItem key={index} text={koan} />
        ))}
      </div>
    </div>
  );
};

export default KoanList;
