import React from 'react'
import  SmallCard from './SmallCard'
import "./InfoContainer.css"
    import Button from "./Button"

function InfoContainer({ infoContainerText }) {
    return (
        <div className="infoContainer">
            <h3 className="infoContainer__text">
                {infoContainerText}
            </h3>
            <div className="infoContainer__table">
                {/* <div className="infoContainer__top"> */}
                    <SmallCard
                        smallCardh4="Model Name"
                        smallCardh3="Model ID" 
                    />
                    <SmallCard
                        smallCardh4="Model ID"
                        smallCardh3="kf235rfraasdfasd" 
                    />
                    <SmallCard
                        smallCardh4="Framework"
                        smallCardh3="Python" 
                    />
                    <SmallCard
                        smallCardh4="Model Type"
                        smallCardh3="PyTorch" 
                    />
                    
                {/* </div>
                <div className="infoContainer__bottom"> */}
                    <SmallCard
                        smallCardh4="Classes"
                        smallCardh3="Normal,Penmonia" 
                    />
                    <SmallCard
                        smallCardh4="Problem Catagory"
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
                    buttonText="covid"
                />
                <Button 
                    buttonText="ensemble"
                />
                <Button 
                    buttonText="xray"
                />
                <Button 
                    buttonText="classification"
                />
            </div>
        </div>
    )
}

export default InfoContainer
