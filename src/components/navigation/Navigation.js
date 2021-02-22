import React from "react";
import {Option, OptionButton} from "./Navigation.styles";

const Navigation = ({signOff, isSignedIn}) => {
        if(isSignedIn) {
        return (<div>
            <Option>
                <OptionButton
                onClick={() => signOff("signin")}
                >Sign out</OptionButton>

            </Option>
        </div>);
        }
        else {
        return (
            <div>
            <Option>
            <OptionButton
            onClick={() => signOff("signin")}
            >Sign in</OptionButton>
            <OptionButton
            onClick={() => signOff("register")}
            >Register</OptionButton>
        
             </Option>
             </div>)
        }

    
}

export default Navigation