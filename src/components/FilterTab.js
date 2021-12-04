import React from 'react';
//import FilterAltRoundedIcon from '@material-ui/icons/FilterAltRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import {
    Select,
    MenuItem,
} from "@material-ui/core";
import "./FilterTab.css"
import Zoom from 'react-reveal/Zoom';

function FilterTab() {
    return (
        <div className="filterTab">
            <Zoom>
            <div className="filterTab__container">
                <div className="filterTab__containerLeft">
                    <select className="select" required>
                        <option value="Lorem">CovidNET</option>
                        <option value="Ipsum">Lorem Ipsum</option>
                    </select>
                </div>
                <div className="filterTab__containerRight">
                    <select className="select" required>
                        <option value="Lorem">TCIA-MIDRC-RIC-1C</option>
                        <option value="Ipsum">Ipsum</option>
                    </select>
                </div>
                <div className="filterTab__containerFilter">
                    <button>
                        <FilterAltRoundedIcon style={{ color: 'white'}}/>
                    </button>
                </div>
            </div>
            </Zoom >
        </div>
    )
}

export default FilterTab
