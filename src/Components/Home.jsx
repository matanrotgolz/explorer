
import '../Designs/App.css';
import React,{useState,useEffect} from 'react';
import styled ,{keyframes}from 'styled-components';
import {bounce} from 'react-animations';


export const BoxContainer = styled.div`
    width: 99%;
    height: 100%;
    display:flex;
    flex-direction: column;
    border-radius: 19px;
    position: relative;
    overflow:; 
`;

export const LeftContainter = styled.div `
    width:40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin:10% 0% 30% 5%;
    @media screen and (min-device-width:300px) and (max-device-width:399px){
      postition: relative; 
      font-size: 20px;
      left:10%;
      bottom:200px;
    }
    @media screen and (min-device-width:400px) and (max-device-width:800px){
      postition: relative; 
      font-size: 20px;
      left:20%;
    }
`;

export const SmallerP = styled.p `
  display: flex;
  flex-direction: column;
  position: relative;
  font-size:18px;
  top:25px;
  right:95px;
  animation: 2s ${keyframes`${bounce}`} infinite;
  color: white;
  @media screen and (min-device-width:300px) and (max-device-width:400px){
    postition: relative; 
    font-size: 20px;
    left:50%;
  }

  @media screen and (min-device-width:400px) and (max-device-width:800px){
    postition: relative; 
    font-size: 20px;
    left:3%;
  }
`;

export const MediumP = styled.p `  
  position: relative;
  font-size:18px;
  right:25px;
  color: white;
  left:2%;
  @media screen and (min-device-width:300px) and (max-device-width:400px){
    postition: relative; 
    font-size: 25px;
    left:20%;
    width:300px;
  }
  @media screen and (min-device-width:400px) and (max-device-width:800px){
    postition: relative; 
    left:3%;
  }
  `;

export const NameHeader = styled.h3`
  postition: relative; 
  @media screen and (min-device-width:300px) and (max-device-width:400px){
    postition: relative; 
    font-size: 25px;
    width:300px;
  }
`;


  export default function Home(props){
    const [textColor, setTextColor] = useState(props.color)

    const textColorFunction = () =>{
      if(props.color ===  "#282c34"){
        setTextColor('#ffffff');
      }
      else{
        setTextColor('#282c34');
      }
    }

    useEffect(()=>{
      textColorFunction();
    },[props.color])
    return (
        <div className="App">
        <header className="App-header" >
        <BoxContainer>
        <LeftContainter>
          <SmallerP id = "SmallP" style ={{color:textColor,transition:'all 200ms ease-in-out'}}>Hey There!</SmallerP>
          <NameHeader style ={{color:'#00d4ff'}}>I Am Matan Rotgoltz</NameHeader>
          <MediumP id = "MediumP" style={{color: textColor,transition:'all 200ms ease-in-out'}}>FullStack Engineer | FrontEnd Strong  </MediumP>
        </LeftContainter>
      </BoxContainer>
      </header>
      </div>
    );

  }