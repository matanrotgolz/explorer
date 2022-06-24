import Particles from "react-tsparticles";
import React,{useState,useEffect} from 'react';
export default function Padrticles(props){
    const [backgroundColor,setBackgroundColor] =useState("#282c34");
    console.log(`Iam insid the main Particles components the props value here is :${props.backgroundColor}`)
      useEffect(()=>{
        setBackgroundColor(props.backgroundColor);
      },[props.backgroundColor])
    return(
      <>
        {console.log(backgroundColor)}
        <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value:`${backgroundColor}`,
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: `${props.color}`,
            },
            links: {
              color: `${props.color}`,
              distance:160,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed:1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "square",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
        />
        </>
    )

}