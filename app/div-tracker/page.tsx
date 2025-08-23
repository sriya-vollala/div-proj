import NavBar from "../components/NavBar";
import TickerForm from "../components/DivTable";
import Footer from "../components/Footer";

export default function DivPage() {
  return (
    <div className="tt">
      <NavBar />
      <h1 className="header">Dividend Tracker</h1>
      <main>
        <p className="subhead">Add all your dividend investments below.</p>
        <TickerForm />
      </main>
      <Footer />
    </div>
  );
}
