
import useSearch from "@renderer/hooks/useSearch";
function Search() {
  
 const {search,handleSearch} = useSearch()
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
