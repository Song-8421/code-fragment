import { useState } from "react";


function Search() {
  const [versions] = useState(window.electron.process.versions);
  console.log(versions);
  return (
    <div className = "bg-slate-50 rounded-lg p-6 drag ">
      <section className = "bg-slate-200 p-3  rounded-lg">
        <input className = "w-full outline-0 bg-slate-200 text-slate-600" type = "text" />
      </section>
    </div>
  );
}

export default Search;
