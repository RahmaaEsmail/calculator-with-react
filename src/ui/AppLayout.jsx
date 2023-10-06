import { useState } from "react"
import CalculatorBoard from "./CalculatorBoard"
import Header from "./Header"
import OutputBox from "./OutputBox"

function AppLayout() {
    const [number,setNumber] = useState([])
    const [result,setResult] = useState(null)

    return (
        <div className="app-container">
            <Header/>
            <OutputBox result={result} number={number}/>
            <CalculatorBoard setResult={setResult} number={number} setNumber={setNumber}/>
        </div>
    )
}

export default AppLayout
