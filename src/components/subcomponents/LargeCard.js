import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import "./LargeCard.css"

function LargeCard({largeCardBottomText, largeCardTopText, largeCardMiddleText}) {
    return (
        <div className="largeCard">
            <div className="largeCard__container">
                <h3 className="largeCard__top">{largeCardTopText}</h3>
                <div className="largeCard__middle"> 
                    <h2>{largeCardMiddleText}</h2>
                    <ArrowUpwardRoundedIcon style={{ color: "#50B04D"}}/>
                </div>
                <div className="largeCard__bottom">
                    <p>Traning</p>
                    <h4>{largeCardBottomText}</h4>
                </div>
            </div>
        </div>
    )
}

export default LargeCard
