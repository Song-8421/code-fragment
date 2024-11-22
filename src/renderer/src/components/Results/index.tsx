import useCodeSelect from "@renderer/hooks/useCodeSelect";
import styles from "./style.module.scss";


const Results = () => {
  const { data ,currentIndex} = useCodeSelect();
  return (
    <main className = {styles.main}>
      {data.map((item, index) => (
        <div key = {item.id}
             className = {`${styles.codeItem} ${currentIndex === index ? styles.active : ""}`}>
          {item.content}
        </div>
      ))}
    </main>
  );
};

export default Results;
