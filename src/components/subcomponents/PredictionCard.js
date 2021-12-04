import React from 'react';
import "./PredictionCard.css"


function PredictionCard({ groundTruth, prediction, loss, confidence, img }) {
    return (
        <div className="predictionCard">
            <div className="predictionCard__container">
                <img  className="predictionCard__image" src={img} />
                <h3  className="predictionCard__info">Ground Truth: {groundTruth}</h3>
                <h3 className="predictionCard__info">Prediction: {prediction}</h3>
                <h3 className="predictionCard__info">Loss: {loss} | Confidence: {confidence}</h3>   
            </div>
        </div>
    )
}

export default PredictionCard
