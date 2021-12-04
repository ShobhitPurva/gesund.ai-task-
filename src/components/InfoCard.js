import React from 'react'
import SmallCard from './subcomponents/SmallCard'
import "./InfoCard.css";
import InfoContainer from './subcomponents/InfoContainer';
import InfoContainerTwo from './subcomponents/InfoContainerTwo';
import Zoom from 'react-reveal/Zoom';
function InfoCard() {
    return (
        <div className="infoCard">
            <Zoom>
                <div className="infoCard__contentLeft">
                    <InfoContainer 
                        infoContainerText = "Model Card (Schema)"
                    />
                </div>
                <div className="infoCard__contentRight">
                    <InfoContainerTwo 
                        infoContainerTwoText = "Data Card"
                    />
                </div>
            </Zoom>
        </div>
    )
}

export default InfoCard
