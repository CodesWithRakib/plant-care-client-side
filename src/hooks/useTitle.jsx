import { useEffect } from "react";
import { useLocation } from "react-router";
const useTitle = (title) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = title || "Green Nest";
  }, [title]);
};
export default useTitle;
