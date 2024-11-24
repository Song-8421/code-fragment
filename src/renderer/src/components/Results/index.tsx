import useCodeSelect from "@renderer/hooks/useCodeSelect";
import styles from "./style.module.scss";


const Results = () => {
  const { data ,id} = useCodeSelect();
  return (
    <main className = {styles.main}>
      {data.map((item) => (
        <div key = {item.id}
             className = {`${styles.codeItem} ${id === item.id ? styles.active : ""}`}>
          {item.content}
        </div>
      ))}
    </main>
  );
};

export default Results;
