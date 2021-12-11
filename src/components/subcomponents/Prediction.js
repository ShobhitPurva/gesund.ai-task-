import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import CardHeader from './CardHeader';
import axios from '../../axios'
import "./Prediction.css"
import PredictionCard from './PredictionCard';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import InfiniteScroll from 'react-infinite-scroll-component';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import "./Prediction.css";





function Prediction() {
    const[predictionCard , setPredictionCard ] = useState([]);
    
    useEffect(() =>{
        axios.get('/test/cards').then((response) =>{
            setPredictionCard(response.data);
        })
    }, []);

    useEffect(() => {
        const pusher = new Pusher('f49e8f36a6eb9b4d7cb0', {
            cluster: 'ap2'
          });
        
        const channel = pusher.subscribe('cards');
        channel.bind('inserted',(newPredictionCard) => {
            // alert(JSON.stringify(newPredictionCard));
            setPredictionCard([...predictionCard, newPredictionCard])
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    },[predictionCard])
  
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
                {/* <InfiniteScroll
                    dataLength={predictionCard.length} //This is important field to render the next data
                    next={fetchData}
                    endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                > */}
                {predictionCard.map(({url, groundtruth, prediction, loss, confidence}) =>(

                    <PredictionCard 
                        groundtruth={groundtruth}
                        prediction={prediction}
                        loss={loss}
                        confidence={confidence}
                        url={url}
                    />
                ))}
                {/* </InfiniteScroll> */}
            </div>
        </div>
    )
}

export default Prediction;