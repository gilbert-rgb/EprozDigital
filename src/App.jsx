import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MotionRoot } from "./components/Reveal";

export default function App() {
  return (
    <MotionRoot>
      <Navbar />
      <Home />
    </MotionRoot>
  );
}
