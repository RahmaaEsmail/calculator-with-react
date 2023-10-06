/* eslint-disable react/prop-types */
import Button from "./Button"

function CalculatorBoard({setNumber,number}) {
   
    function handleClick(e) {
        setNumber([...number,e.target.innerHTML])
    }

    function removeZeroFromStart () {
        while (number.join("")[0] === "0") {
            number = number.join("").substring(1)
            return number
        }
        return number.join("")
    }

    function calculateResult() {
        try{
         const result = eval(removeZeroFromStart())
         setNumber([result])
        }
        catch{
         setNumber(['Math Error'])
        }
    }

    function handleReset() {
        setNumber([])
    }

    function handledeleteLastChar() {    
       if(number.length>0) {
            const removedItem = number.pop()
            setNumber(number.filter(num => num !== removedItem))
       }
    }
    
    return (
        <div className="main-calc">
            <div className="calc-body">
                <div className="btn-group">
                    <Button label={"7"}  onClick={handleClick} className='num-btn'/>
                    <Button label={"8"}  onClick={handleClick} className='num-btn'/>
                    <Button label={"9"}  onClick={handleClick} className='num-btn'/>
                    <Button label={"AC"} onClick={handleReset} className='clear-all-btn'/>
                </div>
                <div className="btn-group">
                    <Button label={"4"} onClick={handleClick} className="num-btn"/>
                    <Button label={"5"} onClick={handleClick} className="num-btn"/>
                    <Button label={"6"} onClick={handleClick} className="num-btn"/>
                    <Button label={"+"}  onClick={handleClick} className="operation-btn"/>
                </div>
                <div className="btn-group">
                    <Button label={"1"} onClick={handleClick} className="num-btn"/>
                    <Button label={"2"} onClick={handleClick} className="num-btn"/>
                    <Button label={"3"} onClick={handleClick} className="num-btn"/>
                    <Button label={"-"} onClick={handleClick} className="operation-btn"/>
                </div>
                <div className="btn-group">
                    <Button label={"."} onClick={handleClick} className="num-btn"/>
                    <Button label={"0"} onClick={handleClick} className="num-btn"/>
                    <Button label={"/"} onClick={handleClick} className="operation-btn"/>
                    <Button label={"*"} onClick={handleClick} className="operation-btn"/>
                </div>
                <div className="btn-group">
                    <Button label={"DEL"} onClick={handledeleteLastChar} className="btn-delete"/>
                    <Button label={"="} onClick={calculateResult} className="btn-equal"/>
                </div>
            </div>
        </div>
    )
}

export default CalculatorBoard
