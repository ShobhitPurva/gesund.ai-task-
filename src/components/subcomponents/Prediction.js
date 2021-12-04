import React from 'react'
import CardHeader from './CardHeader';
import "./Prediction.css"
import PredictionCard from './PredictionCard';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import "./Prediction.css";

function Prediction() {
    return (
        <div className="prediction">
                <div className="predictionHeader__container">
                    <div className="predictionHeader__containerLeft">
                        <p>Plot Top Losses</p>
                    </div>
                    <div className="predictionHeader__containerRight">
                        <div className="predictionHeader__rightItem">
                            <input type="checkbox" />
                            <h3>Show Activations</h3>
                        </div>
                        <div className="predictionHeader__rightItem">
                            <input type="checkbox" />
                            <h3>Hide Correct Predictions</h3>
                        </div>
                    </div>
                </div>

            <div className="prediction__container">
                <PredictionCard 
                    groundTruth="Pneumonia"
                    prediction="Normal" 
                    loss="1.32" 
                    confidence="0.43"
                    img="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                />
                <PredictionCard 
                    groundTruth="Pneumonia"
                    prediction="Normal" 
                    loss="1.32" 
                    confidence="0.43"
                    img="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                />
                <PredictionCard 
                    groundTruth="Pneumonia"
                    prediction="Normal" 
                    loss="1.32" 
                    confidence="0.43"
                    img="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                />
                <PredictionCard 
                    groundTruth="Pneumonia"
                    prediction="Normal" 
                    loss="1.32" 
                    confidence="0.43"
                    img="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                />
                <PredictionCard 
                    groundTruth="Pneumonia"
                    prediction="Normal" 
                    loss="1.32" 
                    confidence="0.43"
                    img="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                />
                <PredictionCard 
                    groundTruth="Pneumonia"
                    prediction="Normal" 
                    loss="1.32" 
                    confidence="0.43"
                    img="https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                />
            </div>
        </div>
    )
}

export default Prediction;