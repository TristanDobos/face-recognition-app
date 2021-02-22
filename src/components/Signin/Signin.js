import React from "react";
import { Section,
        Main,
        Fieldset,
        Legend,
        DataName,
        InputData,
        SubmitButton,
        RegisterButton } from "./Signin.styles";
 
const Signin = ({onRouteChange}) => {
    return (
        <Section>
        <Main>
        <div className="measure ">
            <Fieldset id="sign_up" >
            <Legend >Sign In</Legend>
            <div className="mt3">
                <DataName htmlFor="email-address">Email</DataName>
                <InputData type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <DataName htmlFor="password">Password</DataName>
                <InputData type="password" name="password"  id="password"/>
            </div>
 
            </Fieldset>
            <div className="center">
            <SubmitButton
           
            type="submit" 
            onClick={() => onRouteChange("home")} 
            value="Sign in"/>
            </div>
            <div className="lh-copy mt3 center">
            <RegisterButton 
                href="#0"  
                onClick={() => onRouteChange("register")}>
                    Register
            </RegisterButton>

            </div>
        </div>
        </Main>
        </Section>
    )
}

export default Signin;