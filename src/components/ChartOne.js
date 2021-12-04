import React from 'react';
import './ChartOne.css';
import ChartBox from './subcomponents/ChartBox';
import ChartElement from './subcomponents/ChartElement';
import ChartTable from './subcomponents/ChartTable';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import CardHeader from './subcomponents/CardHeader';
function ChartOne() {
    return (
        <div className="chartOne">
           

            <div className="chartOne__container">
                <Fade>
                    <div className="chartOne__containerLeft">
                        <CardHeader 
                            cardHeaderText="Overall Confusion Matrix"
                        />
                      
                        <Fade left>
                        <ChartElement color1='#ACB9FF' color2="#503795" />
                        </Fade>
                    </div>
                    

                    <div className="chartOne__containerRight">
                        <CardHeader 
                            cardHeaderText = "Training vs Validation Performance"
                        />
                        <Fade right>
                        <ChartElement color1="#BCFFF8" color2="#19B6A4" />
                        </Fade>
                    </div>
                </Fade>
            </div>
            <Zoom>
            <div className="chartOneTableContainer">
                <ChartTable />
            </div>
            </Zoom>
        </div>
    )
}

export default ChartOne;
