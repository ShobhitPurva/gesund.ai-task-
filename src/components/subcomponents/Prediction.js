import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import CardHeader from './CardHeader';
import axios from '../../axios'

import PredictionCard from './PredictionCard';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import InfiniteScroll from 'react-infinite-scroll-component';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import "./Prediction.css";


function Prediction() {
    const[predictionCard , setPredictionCard ] = useState([]);
    
    const [items, setItems] = useState([]);

    const [noMore, setnoMore] = useState([true]);

    const [page, setPage] = useState(2);


    useEffect(()=>{
        const getPredictionCard = async() => {
            const res = await fetch(
                `https://test-gesund.herokuapp.com/test/cards?page=1&size=9`
            );
            const data = await res.json();
            setItems(data);
        }
        getPredictionCard();
    }, []);

    
    const fetchPredictionCard = async () => {
        const res = await fetch(
            `https://test-gesund.herokuapp.com/test/cards?page=${page}&size=9`
        );
        const data = await res.json();
        return data;
    }

    const fetchData = async () => {
        const predictionCardFormServer = await fetchPredictionCard();
        
        setItems([...items, ...predictionCardFormServer]);

        if(predictionCardFormServer.length === 0 || predictionCardFormServer.length < 9){
            setnoMore(false);
        } 

        setPage(page + 1);
    };


    
    // useEffect(() =>{
    //     axios.get('/test/cards').then((response) =>{
    //         setPredictionCard(response.data);
    //     })
    // }, []);


    //pushers
    // useEffect(() => {
    //     const pusher = new Pusher('f49e8f36a6eb9b4d7cb0', {
    //         cluster: 'ap2'
    //       });
        
    //     const channel = pusher.subscribe('cards');
    //     channel.bind('inserted',(newPredictionCard) => {
    //         alert(JSON.stringify(newPredictionCard));
    //         setPredictionCard([...predictionCard, newPredictionCard])
    //     });

    //     return () => {
    //         channel.unbind_all();
    //         channel.unsubscribe();
    //     }
    // },[predictionCard])
  
    // console.log(predictionCard );


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
            <div id="scrollableDiv" className="prediction__container">
                <InfiniteScroll
                    className="prediction__container"
                    dataLength={items.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={noMore}
                    loader={<h4>Loading..</h4>}
                    scrollableTarget="scrollableDiv"
                    // endMessage={
                    //   <p style={{ textAlign: 'center' }}>
                    //     <b>results are finished</b>
                    //   </p>
                    // }
                >
                
                    {items.map((item) =>{
                        return <PredictionCard 
                                    groundtruth={item.groundtruth}
                                    prediction={item.prediction}
                                    loss={item.loss}
                                    confidence={item.confidence}
                                    url={item.url}
                                />
                         }   
                    )}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Prediction;