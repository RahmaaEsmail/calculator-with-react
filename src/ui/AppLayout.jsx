import { useState } from "react"
import CalculatorBoard from "./CalculatorBoard"
import Header from "./Header"
import OutputBox from "./OutputBox"

function AppLayout() {
    const [number, setNumber] = useState([]);

    return (
      <div className="app-container">
        <Header />
        <OutputBox number={number} />
        <CalculatorBoard number={number} setNumber={setNumber} />
      </div>
    );
}

export default AppLayout
