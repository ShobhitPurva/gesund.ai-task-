import React from 'react'
import "./SmallCard.css"

function SmallCard({smallCardh4, smallCardh3}) {
    return (
        <div className="smallCard">
            <h4>{smallCardh4}</h4>
            <h3>{smallCardh3}</h3>
        </div>
    )
}

export default SmallCard
