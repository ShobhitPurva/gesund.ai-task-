import React from 'react'
import "./InfoContainerTwo.css"
import  SmallCard from './SmallCard'
import Button from "./Button"
function InfoContainerTwo({infoContainerTwoText}) {
    return (
        <div className="infoContainer">
            <h3 className="infoContainer__text">
                {infoContainerTwoText}
            </h3>
            <div className="infoContainer__tableTwo">
                {/* <div className="infoContainer__top"> */}
                    <SmallCard
                        smallCardh4="Dataset Name"
                        smallCardh3="TCIA-MIDRC-RIC-1C" 
                    />
                    <SmallCard
                        smallCardh4="Source (Hospital)"
                        smallCardh3="TCIA" 
                    />
                    <SmallCard
                        smallCardh4="Annotion"
                        smallCardh3="CentaurLab(09.11.21)" 
                    />
                    <SmallCard
                        smallCardh4="Created/Updated"
                        smallCardh3="09.02.2021.09.10.2021" 
                    />
                    
                {/* </div>
                <div className="infoContainer__bottom"> */}
                    <SmallCard
                        smallCardh4="Sample Size"
                        smallCardh3="2596" 
                    />
                    <SmallCard
                        smallCardh4="Dataset Version"
                        smallCardh3="v1.1" 
                    />
                    <SmallCard
                        smallCardh4="Source Device"
                        smallCardh3="Mitsubishi XV50" 
                    />
                    <SmallCard
                        smallCardh4="Catagory"
                        smallCardh3="XRay" 
                    />
                    <SmallCard
                        smallCardh4="Problem Category"
                        smallCardh3="Classification(2)" 
                    />
                    <SmallCard
                        smallCardh4="Anatomy Part"
                        smallCardh3="Chest" 
                    />
                {/* </div> */}
            </div>
            <div className="infoContainer__bottom">
                <Button 
                    buttonText="blindness detection"
                />
                <Button 
                    buttonText="eye"
                />
                <Button 
                    buttonText="diabetic retinopathy"
                />
                <Button 
                    buttonText="resnet50"
                />
            </div>
        </div>
    )
}

export default InfoContainerTwo
