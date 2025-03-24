import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const noScrollPaths = ["/inbox", "/chat", "/library", "/login", "/register"];

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Lấy đường dẫn hiện tại

  useEffect(() => {
    if (!noScrollPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
