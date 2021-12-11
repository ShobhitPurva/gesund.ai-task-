import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './MediumCard.css';

function MediumCard({ mediumCardBottomText, mediumCardTopText, mediumCardMiddleText}) {
    return (
        <div className="mediumCard">
            <div className="mediumCard__container">
                <h3 className="mediumCard__top">{mediumCardTopText}</h3>
                <div className="mediumCard__middle">
                    <h2>{mediumCardMiddleText}</h2>
                    <ArrowUpwardRoundedIcon style={{ color: "#50B04D"}}/>
                </div>
                <div className="mediumCard__bottom">
                    <p>Traning:</p>
                    <h4>{mediumCardBottomText}</h4>
                </div>
            </div>
        </div>
    )
}

export default MediumCard
