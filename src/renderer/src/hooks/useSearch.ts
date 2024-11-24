import { ChangeEvent, useState } from "react";
import useCode from "@renderer/hooks/useCode";
import { codes } from "@renderer/data";


export default ()=> {
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
  return {search,handleSearch}
}