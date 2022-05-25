import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const HomeTest = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Doc',
        link: '#docs'
      },
      {
        text: 'Custom',
        link: '#custom-bar'
      },
      {
        text: 'Contact',
        link: '#contact'
      }
    ],
    logo: {
      text: 'Responsive Navbar React'
    },
    style: {
      barStyles: {
        background: ' #282c34'
      },
      sidebarStyles: {
        background: '#282c34',
        buttonColor: 'white'
      }
    }
  }
  return <Navbar {...props} />
}
export default HomeTest;

/*
    <Link  to ='/Home'>
      <LinkedNavBAr style ={{color:props.color}}>Home</LinkedNavBAr>
    </Link>
    <Link   to='/About'>
        <LinkedNavBAr id = 'LinkedNavBAr' style ={{color:props.color}}>About</LinkedNavBAr>
    </Link>
    <Link   to='/Projects'>
        <LinkedNavBAr style ={{color:props.color}}>Projects</LinkedNavBAr>
    </Link>
    <Link   to='/Contact'>
        <LinkedNavBAr style ={{color:props.color}}>Contact</LinkedNavBAr>
    </Link>
    <WeatherAPi>
        <Temp>{weather} </Temp><img src={icon} alt = ""></img>
    </WeatherAPi>
*/