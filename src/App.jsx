import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Components/Footer";
import "./App.css";
import Layout from "./Components/Layout";
import Skeletons from "./Components/Skeletons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <Layout />
        <Skeletons />
        <Footer />
      </div>
    </>
  );
}
export default App;
