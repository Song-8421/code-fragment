import { useEffect, useState } from "react";
import useCode from "@renderer/hooks/useCode";
import styles from "./style.module.scss";
import { copyLinkToClipboardFn } from "@renderer/utils/copyToClipboard.ts";

const Results = () => {
  const { data } = useCode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleKeyDown = (e: KeyboardEvent) => {
    let currentIndexTemp = currentIndex;
    switch (e.key) {
      case "ArrowUp":
        currentIndexTemp--;
        break;
      case "ArrowDown":
        currentIndexTemp++;
        break;
      case "Enter":
        copyLinkToClipboardFn(data[currentIndexTemp].content);
        break;
      default:
        return;
    }
    if (currentIndexTemp > data.length - 1) {
      currentIndexTemp = 0;
    }
    if (currentIndexTemp < 0) {
      currentIndexTemp = data.length - 1;
    }
    console.log(currentIndexTemp, "---");
    setCurrentIndex(currentIndexTemp);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, currentIndex]);

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
