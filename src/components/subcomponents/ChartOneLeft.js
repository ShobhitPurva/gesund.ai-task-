import CardHeader from './CardHeader';
import React from 'react'
import ChartElement from './ChartElement';
import './ChartOneLeft.css'

function ChartOneLeft() {
    return (
        <div className="chartOneLeft">
            <CardHeader 
                cardHeaderText="Overall Confusion Matrix"
            />
            <div className="chartOne__smallContainer">
                <ChartElement color1='#ACB9FF' color2="#503795" />
            </div>


        </div>
    )
}

export default ChartOneLeft
