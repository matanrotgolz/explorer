import React, { useState } from 'react';
import styled from 'styled-components';
import Feedback from './FeedBackForm';
import {motion} from 'framer-motion';
import AccountContext from '../accountContext.js';
import SignUpFromForm from './signupform.jsx';

const BoxContainer = styled.div`
    width: 40%;
    min-height: 550px;
    display:flex;
    flex-direction: column;
    border-radius: 19px;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative;
    left:30%;
    overflow: hidden; 
    backdrop-filter:blur(7px);
    border: 1px solid #00d4ff;
    bottom:32px;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom:5em;
`;

const BackDrop = styled(motion.div)`
    width:200%;
    height: 550px;
    position:absolute;
    dispaly:flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left:-70px;
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,48,121,1) 0%, rgba(0,212,255,1) 0%);
`;

const HeadrContainer = styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction: column;
    text-align: center;
`;

const HeaderText = styled.h2`
    font-size:30px;
    font-seight:600;
    color:#fff;
    z-index:10;
    margin:0;
`;

const SmallText = styled.h5`
    color:#fff;
    font-weight:500;
    font-size:11px;
    z-index:10;
    margin:0;
    margin-top:6px;

`;


const InnerContainer = styled.div`
    position:relative;
    bottom:55px; 
    width:100%;
    display:flex;
    flex-direction:column;
    padding: 0 0.7em;
`;

const BackDrtop = {
    expended:{
        width:'233%',
        height: '1450px',
        borderRadius: '20%',
        transform: 'rotate(60deg)',
    },
    collapsed:{
        width:'160%',
        height:'550px',
        borderRadius:'50%',
        transform: 'rotate(60deg)'
    }
};

const expendedTransform ={
    type:'spring',
    durations:2.3,
    stiffness:30,
}


 function AccountBox (props) {
    const [isExpendad,setExpendad] = useState(false);
    const [active , setActive] = useState('signin');


     
    const play = () => {
        setExpendad(true);
        setTimeout(() =>{
            setExpendad(false);
        },expendedTransform.durations * 1000 - 1500);
    };
    
    const switchToSignUP = () =>{
        play();
     
        setTimeout(()=>{
            setActive('signup');
        },700)
    }
        
    const switchToSignIn = () =>{
        play();
     
        setTimeout(()=>{
            setActive('signin');
        },700)
    }
    const contextValue = {switchToSignUP , switchToSignIn};
        return (
            <AccountContext.Provider value = {contextValue}>
             <BoxContainer>
                <TopContainer>
                    <BackDrop initial={false} 
                    animate ={isExpendad? 'expended':'collapsed'}
                     variants = {BackDrtop}
                     transition={expendedTransform}/ >
                    { active === 'signin' &&<HeadrContainer>
                        <HeaderText style={{color:props.color,transition:'all 200ms ease-in-out'}}>Welcome</HeaderText>
                        <SmallText style={{color:props.color,transition:'all 200ms ease-in-out'}}>Please Fill in the  Form and help me improve</SmallText>
                    </HeadrContainer>}
                    { active === 'signup' &&<HeadrContainer>
                        <HeaderText>Thank You </HeaderText>
                    </HeadrContainer>}
                </TopContainer>
                <InnerContainer>
                    {active === 'signin' && <Feedback/>}
                    {active === 'signup' && <SignUpFromForm/>}
                </InnerContainer>
            </BoxContainer>
            </AccountContext.Provider>
    );
}


export default AccountBox;