import { useCallback, useEffect, useState } from "react";
import useCode from "@renderer/hooks/useCode";
import { copyLinkToClipboardFn } from "@renderer/utils/copyToClipboard";

export default () => {
  const { data } = useCode();
  const [id, setId] = useState(1);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {

      switch (e.key) {
        case "ArrowUp":
          setId(() => {
            const index = data.findIndex(item => item.id === id) - 1;
            return data[index]?.id || data[data.length - 1]?.id;
          });
          break;
        case "ArrowDown":
          setId(() => {
            const index = data.findIndex(item => item.id === id) + 1;
            return data[index]?.id || data[0]?.id;
          });
          break;
        case "Enter":

          copyLinkToClipboardFn(data[data.findIndex(item => item.id === id)]?.content);
          break;
        default:
          return;
      }


    }, [data, id]);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);

    };
  }, [handleKeyDown]);
  useEffect(() => setId(1), [data]);

  return {
    data,
    id
  };
}
