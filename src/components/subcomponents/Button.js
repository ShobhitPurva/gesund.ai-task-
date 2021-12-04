import React from 'react'
import "./Button.css"

function Button({buttonText}) {
    return (
        <div className="button">
            <p>{buttonText}</p>
        </div>
    )
}

export default Button
