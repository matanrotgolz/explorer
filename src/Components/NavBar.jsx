import styled  from 'styled-components';
import {useEffect, useState} from 'react';
import WeatherAppData  from './WeatherData';
import logo from '../logo.svg';
import '../Designs/styles.scss';
import {Link} from 'react-router-dom';
import { Navbar }  from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
import Switch from './Swtich';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const NavBarContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #282c34;
  overflow: hidden;
  

`;

const LinkedNavBAr  = styled.p `
position: relative;
float: left;
display: block;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
transition:all 400ms ease-in-out;
margin-left: 40px;
  &:hover{
    color:#00d4ff !important;
  }

`;

const WeatherAPi =styled.div `
  position: relative;
  float: right;
  left: 3.5em;
  desplay: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-left: 40px;  
  align-items: center;

  @media screen and (max-width:767px){
    float:left;
    display:inline-flex;
    align-items: center;
    position:relative
    flex-direction: column;
    right:100px !important;
    bottom:10px;
  }


`;

const Temp = styled.p `
  position: relative;
  float: right;
  right: 2em;
  desplay: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-left: 20px;  
  bottom:0.8em;

  @media screen and (max-width:767px){
    overflow: hidden;
    display:inline-flex;
    align-items: center;
    cursor:pointer;
    flex-direction: column;
    bottom:0em;
  
  }


`;




export default function MenuAppBar(props) {
  const LoadingLogo = <img src ={logo} className="App-logo" alt="logo"/>
  const [weather,SetWeather] =useState(LoadingLogo);
  const [mode,SetStatus] =useState('notFetched');
  const [icon,SetIcon] = useState(null);
  const slidBarColor = props.color === '#282c34'? '#282c34'  : '#ffffff' ;
  const [theme,SetTheme] = useState(null);
  const [currentColor,SetCurrentColor] = useState(null);
  const [currentButtonColor,SetCurrentButtonColor] = useState(props.color === 'dark' ? 'white' : '#282c34');
  const [backgroundColor,setBackgroundColor] = useState(null);
  const [textColor,setTextColor] = useState(props.color === '#282c34' ? 'white' : '#282c34')
  const [value, setValue] = useState(false);

  const ThemeColor=()=>{
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if(matched) {
        SetTheme('dark');
      }
      else{
        SetTheme('light');
      }
     ReactDOM.render(<React.StrictMode><App color = {theme} /></React.StrictMode>,document.getElementById('root'));
  };

 const  ButtonFunction = () =>{
  if(theme === 'dark'){
   SetCurrentColor('light');
   SetCurrentButtonColor('#282c34');
   setBackgroundColor('#ffffff');
   ReactDOM.render(<React.StrictMode><App color = {backgroundColor} /></React.StrictMode>,document.getElementById('root'));



 }
 else{
   SetCurrentColor('dark');
   SetCurrentButtonColor('white');
   setBackgroundColor('#282c34');
   ReactDOM.render(<React.StrictMode><App color = {backgroundColor} /></React.StrictMode>,document.getElementById('root'));
 }
}

useEffect(()=>{
  ThemeColor();
},[])

useEffect(()=>{
  //the initial status of value is false
  console.log(value,currentColor);
  if(currentColor === null){
    setValue(value);
    ButtonFunction();
  }
ButtonFunction();
  console.log('button been called');
},[value])


const WeatherFunction = () =>{
  WeatherAppData.getWheater().then(WeatherResults =>{
    try{
      SetWeather(Math.floor(WeatherResults.current.temp_c).toString()+' C °');
      SetIcon(WeatherResults.current.condition.icon)
      SetStatus('Fetched')
    }
    catch{
      console.log(`If error is 429 is a well known error. The app is rendering 2 times in less then 1 second,Which means that
      the App is requesting data from the API 2 times in less then a second which leads to the following error: code: too_many_requests
      message: "Free plan is limited to 1 request per second. Please wait or upgrade to remove this restriction."`);
    }

  })
 }

 useEffect(()=>{
  setTimeout(function(){
    WeatherFunction();

  },1000)
},[mode]);
   const NavBar = (props) => {
    
    const prop = {
      items: [
        {
          text: <LinkedNavBAr style ={{color:textColor}}>Home</LinkedNavBAr>,
          link:'/Home'
        },
        {
          text: <LinkedNavBAr style ={{color:textColor}}>About</LinkedNavBAr>,
          link:  '/About'   
        },
        {
          text: <LinkedNavBAr style ={{color:textColor}}>Projects</LinkedNavBAr>,
          link:  '/Projects'   
        },
        {
          text: <LinkedNavBAr style ={{color:textColor}}>Contact</LinkedNavBAr>,
          link:'/Contact'
        },
        /*
        {
          text:<Switch isOn={value} onColor={currentButtonColor} handleToggle={() => {setValue(!value);}}/>
        }*/
      ],
      logo: {
        text: <WeatherAPi><Temp style ={{color:textColor}}>{weather} </Temp><img src={icon} alt = ""></img></WeatherAPi>
      },
      style: {
        barStyles: {
          background: 'rgba(40, 44, 52, 0)',
        },
        sidebarStyles: {
          background:   `${slidBarColor}`,
          buttonColor: `${textColor}`,
        }
      }
    }
    return(
      <Navbar {...prop} />
    )
    
  } 

  return(
    <NavBarContainer id = "NavBar" >
        <NavBar {...props}/>
    </NavBarContainer>

 
  )
}

