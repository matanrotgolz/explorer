
import '../Designs/App.css';
import MenuAppBar from './NavBar'
import React,{useState,useEffect} from 'react';
import Padrticles from './Particles';
import Switch from './Swtich';
import About from './About';
import Projects from './Projects';
import {Routes,Route, BrowserRouter} from  'react-router-dom';
import Contact from './Contact';
import Home from './Home';

function App(props) {
  const [currentColor,SetCurrentColor] = useState(props.color);
  const [backgroundColor1,setBackgroundColor1] = useState(props.color);
  const[theme,SetTheme] = useState(null);
  const ThemeColor=()=>{
     let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if(matched) {
         SetTheme('#282c34');
         setBackgroundColor1('#282c34');
         console.log(theme)
      }
      else{
        SetTheme('#fffff');
        setBackgroundColor1('#fffff');
        console.log(theme)
      }
      return matched;
  };

  useEffect(()=>{
     ThemeColor();
  },[])

  
  useEffect(()=>{
      setBackgroundColor1(props.color);
  },[props.color])
  
  return (
    
    <div className="App">
      <Padrticles color ={'#00d4ff'}  backgroundColor ={theme}/>
      <header className="App-header">
        <BrowserRouter>
            <MenuAppBar color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>
            <Routes>
              <Route exact path ='/' element={<Home color = { props.color === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact path ='/Home' element={<Home color = { backgroundColor1 === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact  path = 'About'  element={<About color = { backgroundColor1 === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact path ='Projects'  element={<Projects color = { backgroundColor1 === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
              <Route exact path='Contact'  element={<Contact color = { backgroundColor1 === '#282c34' ? '#ffffff' : '#282c34'}/>}/>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}



export default App;



