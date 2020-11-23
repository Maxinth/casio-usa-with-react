import { useEffect } from "react";

const useDocumentTitle = (title) => {
  return useEffect(() => {
    document.title = `${title} | Casio USA`;
  }, [title]);
};

export default useDocumentTitle;
