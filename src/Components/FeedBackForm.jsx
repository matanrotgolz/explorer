import React, { useContext} from 'react';
import {BoxContainer2,FormContainer,TextArea,SubmitButtom,InputCoantiner,LeftInput,RightInput} from '../Designs/common.jsx';
import AccountContext  from '../accountContext.js';
export default function Feedback(props){
    const {switchToSignUP} = useContext(AccountContext);
        return(
            <BoxContainer2>
                <FormContainer>
                    <InputCoantiner>
                        <LeftInput type ="text" id="FullName" placeholder ="Full name goes Here" required/>
                        <RightInput type= "email" id ="Email" placeholder ="Email goes Here" required = "please enter your email address"/>
                    </InputCoantiner>
                    <br></br> <br></br>
                    <TextArea required   id= "feedBack" rows="4" cols="50" placeholder="Pleace leave tour feedback here  😁  "/>
                    <SubmitButtom type = "submit" onClick =  {switchToSignUP} >Submit</SubmitButtom>
                </FormContainer>
            </BoxContainer2>
        );
}
