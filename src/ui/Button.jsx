/* eslint-disable react/prop-types */
function Button({label ,  onClick , className}) {
    return (
        <button className={className}  onClick={onClick}>{label}</button>
    )
}

export default Button
