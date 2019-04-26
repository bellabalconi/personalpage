import React, { Component } from "react";
import { Progress } from 'reactstrap';


const SkillItem = (props) => {
    const {image, progressValue, color } = props
    return (
        <div className="container-progress">
            <img className="" src={image} />
            <Progress className="mg15px" animated color={color} value={progressValue} />
        </div>
    )
        
}
export default SkillItem

