import React from 'react';
import "./PredictionCard.css"


function PredictionCard({ groundtruth, prediction, loss, confidence, url }) {
    return (
        <div className="predictionCard">
            <div className="predictionCard__container">
                <div className="predictionCard__imageContainer">
                    <img  className="predictionCard__image" src={url} />
                    <div className="predictionCard__imageOverlay">
                        <img className="predictionCard__imageOverlaySearch" src='/images/search.svg' />
                    </div>
                </div>
                
                <h3  className="predictionCard__info">Ground Truth: {groundtruth}</h3>
                <h3 className="predictionCard__info">Prediction: {prediction}</h3>
                <h3 className="predictionCard__info">Loss: {loss} | Confidence: {confidence}</h3>   
            </div>
        </div>
    )
}

export default PredictionCard
