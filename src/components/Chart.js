import React from 'react';
import './Chart.css';
import ChartBox from './subcomponents/ChartBox';
import ChartElement from './subcomponents/ChartElement';
import ChartTable from './subcomponents/ChartTable';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
function Chart() {
    return (
        <div className="chart">
            <p>Basic Data Stats</p>
            
            <div className="chart__container">
                <Fade>
                    <div className="chart__containerLeft">
                        <ChartBox />
                    </div>
                    

                    <div className="chart__containerRight">
                        <ChartBox />
                    </div>
                </Fade>
            </div>
            
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 0.5 }}>
                    <Fade left>
                    <ChartElement color1='#ACB9FF' color2="#503795" />
                    </Fade>
                </div>
                <div style={{ flex: 0.5 }}>
                    <Fade right>
                    <ChartElement color1="#BCFFF8" color2="#19B6A4" />
                    </Fade>
                </div>
            </div>
            <Zoom>
            <div className="chartTableContainer">
                <ChartTable />
            </div>
            </Zoom>
        </div>
    )
}

export default Chart;
