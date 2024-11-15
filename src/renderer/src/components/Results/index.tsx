import React, { useEffect, useState } from "react";
import useCode from "@renderer/hooks/useCode";

const Results = () => {
  const { data } = useCode();
  const { currentIndex, setCurrentIndex } = useState(0);
  const handleKeyDown = (e: KeyboardEvent) => {
    console.log("触发", e.key);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

  return (
    <main className = "bg-slate-50 p-6 rounded-bl-lg rounded-br-lg -mt-6">
      {currentIndex}
      {data.map((item) => (
        <div key = {item.id} className = "text-slate-500 truncate mb-4">
          {item.content}
        </div>
      ))}
    </main>
  );
};

export default Results;
