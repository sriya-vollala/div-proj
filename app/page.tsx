import Image from "next/image";
import TickerForm from "./components/UserInput";

export default function Home() {
  return (
    <div>
      <h1 className="header">Dividend Tracker</h1>
      <TickerForm />
    </div>
  );
}
