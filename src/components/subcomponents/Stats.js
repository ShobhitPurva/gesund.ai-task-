import CardHeader from './CardHeader';
import React from 'react'
import CustomTable from './CustomTable'
import "./Stats.css"
;

function Stats() {
    return (
        <div className="stats">
            <CardHeader cardHeaderText="Basic Model Stats"/>
            <div className="stats__Container">
                
                <div className="stats__leftContainer">
                    <CustomTable />
                </div>
                
                <div className="stats__rightContainer">
                    <CustomTable />
                </div> 
            </div>
          
            
        </div>
    )
}

export default Stats
