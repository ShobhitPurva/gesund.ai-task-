import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import "./LargeCard.css"

function LargeCard({largeCardBottomText, largeCardTopText, largeCardMiddleText, rising, traning}) {
    return (
        <div className="largeCard">
            <div className="largeCard__container">
                <h3 className="largeCard__top">{largeCardTopText}</h3>
                <div className="largeCard__middle" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '402px', height: '46px'}}> 
                    <h2 style={{width:'107px', height:'46px'}}>{largeCardMiddleText}</h2>
                    <img src={rising} style={{ 
                        width:'1 0.02px', 
                        height:'10.02px',
                        color: "#50B04D",
                        paddingBottom: '30.98px',
                        paddingTop: '5px'}}/>
                </div>
                <div className="largeCard__bottom">
                    <p>{traning}</p>
                    <h4>{largeCardBottomText}</h4>
                </div>
            </div>
        </div>
    )
}

export default LargeCard
