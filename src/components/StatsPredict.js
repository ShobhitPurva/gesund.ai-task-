import React from 'react'
import Stats from './subcomponents/Stats'
import Prediction from './subcomponents/Prediction'
import Fade from 'react-reveal/Fade';
import "./StatsPredict.css"

function StatsPredict() {
    return (
        <div className="statsPredict">
            <Fade left>
                <div className="statsPredict__left">
                    <Stats />
                </div>
            </Fade>
            <Fade right>
                <div className="statsPredict__right">
                    <Prediction />
                </div>
            </Fade>
            <img />
        </div>

    )
}

export default StatsPredict
