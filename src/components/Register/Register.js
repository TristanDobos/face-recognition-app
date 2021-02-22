import React from "react";
import {InputField, 
        Main, 
        Fieldset,
        Legend,
        SubmitButton, 
        Section, 
        InputDataName} 
        from "./Register.styles";

const Register = ({onRouteChange}) => {
    return (
        <Section >
        <Main >
        <form className="measure ">
            <Fieldset id="sign_up">
            <Legend>
                 Register
            </Legend>
             <div className="mt3">
                <InputDataName 
                htmlFor="email-address">
                  Name
                </InputDataName>
                <InputField 
                type="text" 
                name="name"  
                id="name"/>
            </div>
            <div className="mt3">
                <InputDataName 
                htmlFor="email-address">
                   Email
                </InputDataName>
                <InputField 
                type="email" 
                name="email-address"  
                id="email-address"/>
            </div>
            <div className="mv3">
                <InputDataName 
                htmlFor="password">
                    Password
                </InputDataName>
                <InputField 
                type="password" 
                name="password"  
                id="password"/>
            </div>
 
            </Fieldset>
            <div 
            className="center">
            <SubmitButton
            onClick={() => onRouteChange("home")}
            type="submit" 
            value="Sign up"/>
            </div>
        </form>
        </Main>
        </Section>
    )
}

export default Register;