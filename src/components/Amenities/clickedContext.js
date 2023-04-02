import { createContext } from "react";

const clickedContext = createContext({
  clicked: "COMMERCIAL AREAS",
  setClicked: (title) => {}
});

export default clickedContext;
