import React from 'react';
import './ChartBox.css';

function ChartBox({chartBoxText}) {
    return (
        <div className="chartBox">
            <p>{chartBoxText}</p>
        </div>
    )
}

export default ChartBox;
