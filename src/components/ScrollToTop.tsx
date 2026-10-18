import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the previous page's scroll position on navigation,
// so a footer link would open the next page at its bottom.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
