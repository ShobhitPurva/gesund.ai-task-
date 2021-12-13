import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './MediumCard.css';

function MediumCard({ mediumCardBottomText, mediumCardTopText, mediumCardMiddleText}) {
    return (
        <div className="mediumCard">
            <div className="mediumCard__container">
                <h3 className="mediumCard__top">{mediumCardTopText}</h3>
                <div className="mediumCard__middle" style={{ 
                        width:'137px', height:'46px', 
                        display: 'flex', 
                        justifyContent: 'center',       
                        alignItems: 'center',
                    }}>
                    <h2>{mediumCardMiddleText}</h2>
                    <img src='/images/rising.svg' style={{ width: '10.02px', 
                        height: '10.02px', 
                        paddingTop: '5px', 
                        paddingBottom: '30.98px', 
                        paddingLeft: '5px',}}/>
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
