import React, {useEffect, useState} from 'react'
import CardHeader from './CardHeader';
import axios from '../../axios'
import "./Prediction.css"
import PredictionCard from './PredictionCard';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import "./Prediction.css";

function Prediction() {
    const[predictionCard , setPredictionCard ] = useState([]);
    
    useEffect(() =>{
      async function fetchPosts(){
        const response = await axios.get('/test/cards');
        setPredictionCard (response.data);
        return response;
      } 
      
      fetchPosts();
    }, []);
  
    console.log(predictionCard );

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
                {predictionCard.map(({url, groundtruth, prediction, loss, confidence}) =>(
                    <PredictionCard 
                        groundtruth={groundtruth}
                        prediction={prediction}
                        loss={loss}
                        confidence={confidence}
                        url={url}

                    />
                ))}
            </div>
        </div>
    )
}

export default Prediction;