/**
 * Citation:
 * https://reactrouter.com/web/guides/scroll-restoration
 *
 * Written by creators of React Router. Provides the tool
 * that forces the page to start at the top on react page
 * transitions.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
