import React from 'react';
import './Chart.css';
import ChartBox from './subcomponents/ChartBox';
import ChartElement from './subcomponents/ChartElement';
import ChartTable from './subcomponents/ChartTable';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { ScatterChart } from './subcomponents/ScatterChart';
import { StackedBarChart } from './subcomponents/StackedBarChart';
import CardHeader  from './subcomponents/CardHeader';

function Chart() {
    return (
        <div className="chart">
            <div style={{ padding:'24px 24px 16px 24px', width: '1820px'}}>
                <CardHeader cardHeaderText="Basic Data Stats"/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Fade>
                    <div style={{ padding: '0px 12px 0px 0px'}}>
                        <ChartBox chartBoxText='Class Distribution'/>
                    </div>
                    <div style={{ padding: '0px 0px 0px 12px' }}>
                        <ChartBox chartBoxText='Color Distribution'/>
                    </div>
                </Fade>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <div style={{ width: '924px', alignItems: 'center', flexDirection: 'column'}}>
                    {/* <ChartBox /> */}
                    <Fade left>
                        <div style={{ padding: '0px 12px 12px 24px',}}>
                            <StackedBarChart />
                        </div>
                    </Fade>
                </div>
               
                <div style={{ width: '924px', alignItems: 'center', flexDirection: 'column'}}>
                    <Fade right>
                        {/* <ChartBox /> */}
                        <div style={{ padding: '0px 24px 12px 12px', }}>
                            <ScatterChart />
                        </div>
                   
                    
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
