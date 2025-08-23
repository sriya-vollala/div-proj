import Image from "next/image";
import TickerForm from "./components/DivTable";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="tt">
      <NavBar />
      <h1 className="header">Home Page</h1>
      <main>
        <p className="subhead">Welcome, to the Dividend Reinvestment Calculator!</p>
        <p className="text">Click the Dividend Tracker to keep track of all the dividend payments you have accumulated.</p>
        <p className="text">Click the Reinvestment Calculator to calculate your earnings based on your initial investment 
          and if you reinvested all your money in the same stock.</p>
      </main>
      <Footer />
    </div>
  );
}
