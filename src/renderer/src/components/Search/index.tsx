import { ChangeEvent, useState } from "react";
import useCode from "../../hooks/useCode";
import { codes } from "@renderer/data";

function Search() {
  const { setData } = useCode();
  const [search, setSearch] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearch(keyword);
    if (keyword === "") {
      setData([]);
    } else {
      setData(
        codes.filter(
          code =>
            code.content.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }


  };
  return (
    <div className = "bg-slate-50 rounded-lg p-6 drag ">
      <section className = "bg-slate-200 p-3  rounded-lg">
        <input value = {search} onChange = {handleSearch} className = "w-full outline-0 bg-slate-200 text-slate-600"
               type = "text" />
      </section>
    </div>
  );
}

export default Search;
