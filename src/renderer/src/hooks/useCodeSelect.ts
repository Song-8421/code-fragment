import { useEffect, useState,useCallback } from "react";
import useCode from "@renderer/hooks/useCode";
import { copyLinkToClipboardFn } from "@renderer/utils/copyToClipboard";
export default () => {
  const { data } = useCode();
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
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
  },[data,currentIndex])
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      
    };
  }, [handleKeyDown]);
  useEffect(() => setCurrentIndex(0), [data])
  
  return {
    data,
    currentIndex
  }
}