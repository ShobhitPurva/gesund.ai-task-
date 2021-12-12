import CardHeader from './CardHeader';
import React from 'react';
import './ChartOneRight.css'
import ChartElement from './ChartElement';

function ChartOneRight() {
    return (
        <div className="chartOneRight">
            <CardHeader 
                cardHeaderText = "Training vs Validation Performance"
            />
            <div className="chartOne__smallContainer">
                <ChartElement color1="#BCFFF8" color2="#19B6A4" />
            </div>
        </div>
    )
}

export default ChartOneRight
