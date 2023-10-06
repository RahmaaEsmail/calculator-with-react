/* eslint-disable react/prop-types */
function OutputBox({number}) {
   
    return (
        <div className="output-box">
            <div className="current-output">{number? number.join(""):''}</div>
        </div>
    )
}

export default OutputBox
