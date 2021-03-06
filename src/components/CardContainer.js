import React,{useEffect, useState} from 'react'
import "./CardContainer.css"
import LargeCard from './subcomponents/LargeCard';
import MediumCard from './subcomponents/MediumCard';
import Fade from 'react-reveal/Fade';
import axios from '../axios';
function CardContainer() {
    return (
        <div className="cardContainer">
            <div className="cardContainer__left">
                <Fade left>
                <MediumCard 
                    mediumCardTopText = "Accuracy"
                    mediumCardMiddleText ="0.8344"
                    mediumCardBottomText = "0.8112"
                />
                
                <MediumCard 
                    mediumCardTopText = "Micro F1"
                    mediumCardMiddleText ="0.7843"
                    mediumCardBottomText = "0.77"
                />
                <MediumCard 
                    mediumCardTopText = "Avg. F1"
                    mediumCardMiddleText ="0.8001"
                    mediumCardBottomText = "0.779"
                />
                <MediumCard 
                    mediumCardTopText = "Macro F1"
                    mediumCardMiddleText ="0.8211"
                    mediumCardBottomText = "0.8061"
                />
            </Fade>
            </div>
            <div className="cardContainer__right">
                <Fade right>
                <LargeCard
                    largeCardTopText = "Avg. F1"
                    largeCardMiddleText ="0.8001"
                    largeCardBottomText = "0.779"
                    rising ="/images/rising.svg"
                    traning = "Traning"
                />
                <LargeCard
                    largeCardTopText = "Kolmogorov-Smirnov Test"
                    largeCardMiddleText ="0.4125"
        
                
                />
                </Fade>
            </div>
        </div>
    )
}

export default CardContainer;
