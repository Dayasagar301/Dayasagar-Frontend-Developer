import "./App.css";
import {  Pic } from "./components/Pic";
import { Footer } from "./components/Footer";
import GetStarted from "./components/GetStarted";

// import { GetStarted } from "./components/GetStarted";
import { Header } from "./components/Header";
import { ItemSection } from "./components/ItemSection";
import { RoadMap1 } from "./components/RoadMap1";
import { RoadMap2 } from "./components/RoadMap2";
import { RoadMap3 } from "./components/RoadMap3";

import { TechTools } from "./components/Technologies";
import { TextSection } from "./components/TextSection";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <>
      <div className="figma-app">
        <Header />
        <TextSection />
        <Pic/>
        <TechTools />
        <ItemSection />
        <Tokenomics />
        <div className="main-container">
          <RoadMap1 />
          <RoadMap2 />
          <RoadMap3 />
        </div>
   <GetStarted/>
      <Footer/>

      </div>
    </>
  );
}

export default App;
