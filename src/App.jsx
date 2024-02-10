import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import HireMe from "./components/hire_me";

export default function App() {
  return (
    <div className="bg-[#0d0346] w-screen  ">
      <Navbar />
      <Hero />
      <Footer />
      <Portfolio />
      <HireMe />
    </div>
  );
}
