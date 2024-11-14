import React, { useContext } from "react";
import { CodeContext } from "@renderer/context/CodeContext";

const Results = () => {
  const { data } = useContext(CodeContext)!;
  return (
    <main className = "bg-slate-50 p-6 rounded-bl-lg rounded-br-lg -mt-6">
      {data.map((item) => (
        <div key = {item.id} className = "text-slate-500 truncate mb-4">
          {item.content}
        </div>
      ))}
    </main>
  );
};

export default Results;
