
import '../Designs/App.css';
import MenuAppBar from './NavBar'
import React,{useState,useEffect} from 'react';
import Padrticles from './Particles';
import About from './About';
import Projects from './Projects';
import {Routes,Route, BrowserRouter} from  'react-router-dom';
import Contact from './Contact';
import Home from './Home';

function App(props) {
  const [backgroundColor1,setBackgroundColor1] = useState(props.color);
  const [theme,SetTheme] = useState(null);
  const ThemeColor=()=>{
     let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if(matched) {
         SetTheme('#282c34');
         setBackgroundColor1('#282c34');
      }
      else{
        SetTheme('#fffff');
        setBackgroundColor1('#fffff');
      }
      return matched;
  };

  
  useEffect(()=>{
    if(props.color === undefined || props.color === null){
      ThemeColor();
    }
    else{
      setBackgroundColor1(props.color);
    }
  },[props.color])
  
  return (
    
    <div className="App">
      {console.log(`Iam inside the App components  the background color is ${backgroundColor1} `)}
      <Padrticles color ={'#00d4ff'}  backgroundColor ={backgroundColor1}/>
      <header className="App-header">
        <BrowserRouter>
            <MenuAppBar color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>
            <Routes>
              <Route exact path ='/' element={<Home color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact path ='/Home' element={<Home color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact  path = 'About'  element={<About color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact path ='Projects'  element={<Projects color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact path='Contact'  element={<Contact color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}



export default App;



