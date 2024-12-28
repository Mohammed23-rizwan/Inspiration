import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MainImg from "./Components/MainImg";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="w-full h-full bg-[#fff] px-10">
      <NavBar />
      <div className=" my-14">
        <Hero />
        <MainImg />
      </div>
      <Footer />
    </div>
  );
};

export default App;
