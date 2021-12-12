import React from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import "./CardHeader.css"

function CardHeader({ cardHeaderText }) {
    return (
        <div className="cardHeader">
            <div className="cardHeader__container">
                <div className="cardHeader__containerLeft">
                    <p>{cardHeaderText}</p>
                </div>
                <div className="cardHeader__containerRight">
                    <img src="/images/pin.svg" style={{ color: 'white'}} />
                    <button>
                        <img src="/images/filter.svg" style={{ color: 'white'}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
