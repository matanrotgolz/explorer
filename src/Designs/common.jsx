import styled from "styled-components";

export const BoxContainer = styled.div`
    display: inline-block;
    width: 99%;
    height: 100%;
    position: relative;
    items-align: center;
    margin:0% 0% 0% 0%;
    color: white;
    @media screen and (min-device-width:300px) and (max-device-width:400px){
        postition: relative; 
        margin-right: 90px;
        margin-top:20px;
    
      }
`;

export const Put2Top = styled.div `
    position: relative;
    margin:6% 0% 2% 5%;
    color: white;
`;

export const SmallerP = styled.p `
  position: relative;
  font-size:18px;
  top:25px;
  right:95px;
  color: white;
`;

export const MediumP = styled.p `  
    position: relative;
    font-size:18px;
    right:25px;
    color: white;
`;

export const MainPDiv = styled.div `
    position:absolute;
    width:100%;
    bottom:1em;
    color: white;
    @media screen and (max-width:767px){
        float:left;
        display:inline-flex;
        align-items: center;
        position:relative
        flex-direction: column;
        right:21rem !important;
        top:800px;
        
      }
`;

export const MainP = styled.div `
    backdrop-filter:blur(7px);
    width:50%;
    border-radius:5px;
    height:auto; 
    border: 1px solid #00d4ff;
    margin-left:15%;
    color: white;
`;

export const RightDiv = styled.div `    
    position: relative;
    margin-left:60%;
    color: white;
    display:flex;
    flex-direction: column;
    @media screen and (max-width:767px){
        margin-left:0% !important;
        float:left;
        display:inline-flex;
        align-items: center;
        position:relative
        flex-direction: column;
        left:7rem !important;
        bottom:10px;
      }
    }

`;

export const H1 = styled.h1 `
    position:relative;
    display:flex;
    flex-direction: column;
    color: white;
    @media screen and (min-device-width:300px) and (max-device-width:400px){
        postition: relative; 
        bottom:180px;
    
      }
 

`;

export const H1Contact = styled.h1 `
    position:relative;
    display:flex;
    flex-direction: column;
    color: white;
    bottom:30px;
`;

export const H1Project = styled.h1 `
    display:flex;
    flex-direction: column;
    color: white;
    margin-bottom:.5em;
    border: 1px solid white;
`;


export const BoxContainer2 = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
    position:relative;
`;

export const FormContainer = styled.form`

    align-items: center;
    display:flex;
    width:150%;
    flex-direction: column;
    box-shadow: 0px 0px 2.4px rgba(15,15,15,0.19);
    
`;

export const MutedLink = styled.p`
    position: relative;
    right:20px;
    top:29px;
    font-size: 12px;    
    color: rgba (200, 200,200,0.8);
    font-weight:500;
    text-decoration: none;
    margin:1.5em;
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(2,0,36);
    font-weight:600;
    text-decoration: none;
    border:1px solid black;
    padding: 10px 10px;
`;

export const TextArea = styled.textarea`
    color: #00d4ff;
    top:35px !important;
    position: relative;
    left:5%;    
    width: 73%;
    height:150%;
    outline:none;
    border: none;
    padding: 0px 10px;
    border-bottom 1.4px solid  transparent;
    transition:all 200ms ease-in-out;
    background-color: rgb(0,0,0,0);

    &::placeholder{
        color:#00d4ff;
    }

    &::not(:last-of-type){
        border-bottom:1.5px solid rgba (200,200,200,0.4);
    }
    
    &:focus{
        outline:none;
        border-bottom: 2px solid rgb(2,0,36);
    }
`;

export const SubmitButtom = styled.button`
    position: relative;
    right:3px;
    top:70px;
    padding: 11px 40%;
    color: #fff;
    font-size:15px;
    font-weight:600;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    border: 1px solid #00d4ff;
    border-radius:100px 100px 100px 100px;
    transition: backdrop-filter 400ms ease-in-out;
    transition: color 400ms ease-in-out;
    background: rgb(0,0,0,0.1);
    &:hover{
        backdrop-filter:blur(10px);
        color:  #00d4ff;
    }
`;

export const BlueP = styled.p `
    color: #00d4ff;
`;


export const  InputCoantiner = styled.div `
    position:relative;

`;

export const LeftInput = styled.input `
color:#00d4ff;
position: relative;
right:25%;
top:20px;
width: 73%;
height:100%;
outline:none;
border: none;
padding: 0px 10px;
border-bottom 1.4px solid  transparent;
transition:all 200ms ease-in-out;
background-color: rgb(0, 0, 0,0);
margin: 15px 15px 15px 25px;

&::placeholder{
    color:#00d4ff;
}
&::not(:last-of-type){
    border-bottom:1.5px solid rgba (200,200,200,0.4);
}
&:focus{
    outline:none;
    border-bottom: 2px solid #00d4ff;
`;


export const RightInput = styled.input `
color:  #00d4ff;
position: relative;
top:20px;
right:25%;
width: 73%;
height:100%;
outline:none;
border: none;
padding: 0px 10px;
border-bottom 1.4px solid  transparent;
transition:all 200ms ease-in-out;
background-color: rgb(0,0,0,0);
margin: 15px 15px 15px 25px;

&::placeholder{
    color:#00d4ff;
}
&::not(:last-of-type){
    border-bottom:1.5px solid rgba (200,200,200,0.4);
}
&:focus{
    outline:none;
    border-bottom: 2px solid #00d4ff;
`;
