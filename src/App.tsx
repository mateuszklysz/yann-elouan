import { createContext, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import ILoadedContext from "./ts/loaded";

export const LoadedContext = createContext({} as ILoadedContext);

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <LoadedContext.Provider value={{ loaded, setLoaded }}>
      {!loaded && <Loader />}
      <Hero />
      <div style={{ height: "500px" }}></div>
    </LoadedContext.Provider>
  );
};

export default App;
