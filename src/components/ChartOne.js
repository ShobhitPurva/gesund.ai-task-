import React from 'react';
import './ChartOne.css';
import ChartBox from './subcomponents/ChartBox';
import ChartElement from './subcomponents/ChartElement';
import ChartTable from './subcomponents/ChartTable';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import CardHeader from './subcomponents/CardHeader';
import ChartOneLeft from './subcomponents/ChartOneLeft';
import ChartOneRight from './subcomponents/ChartOneRight';
function ChartOne() {
    return (
        <div className="chartOne">
            
                <div className="chartOne__containerLeft">
                <Fade left>
                    <ChartOneLeft />
                </Fade>
                </div>
                <div className="chartOne__containerRight">
                <Fade right>
                   <ChartOneRight />
                </Fade>
                </div>

         
        </div>
    )
}

export default ChartOne;
