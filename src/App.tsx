import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AIGEN from "./pages/AIGEN";
import HeroSection2 from "./components/HeroSection2";
import HowItWorks from "./components/ HowItWorks";
import Scroll from "./components/Scroll";
import Outfit from "./components/Outfit";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import "./index.css"
function App() {
  return (
    <>
      <AIGEN />
     
      
      <HowItWorks />
      <Scroll/>
      <Outfit/>
      <Tokenomics />
      <Roadmap/>
      <GetStarted/>
      <Footer />
    </>
  );
}
export default App;
