import React from "react";
import {BountingBox} from "./FaceRecognition.styles";

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="center ma3">
            <div className="absolute">
                <img id="inputimage" src={imageUrl} alt="" width="500 px" height="auto"/>
                <BountingBox style={{top: box.topRow, 
                                    right: box.rightCol, 
                                    bottom: box.bottomRow, 
                                    left: box.leftCol}}>
                                    </BountingBox>
                </div>
        </div>
    )
}

export default FaceRecognition

