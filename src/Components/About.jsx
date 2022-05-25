import {BoxContainer,RightDiv,MainPDiv,H1} from '../Designs/common'
import RadarChart from './SkillsGraph'
import React,{useRef,useState,useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import '../Designs/styles.scss';
export default function About(props){
    const [textColor, setTextColor] = useState(props.color)
    const textColorFunction = () =>{
      console.log('I have been activated');
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
    return(

        <div className="App">
        <BoxContainer>
            <H1 id ="AboutMeH1" style={{color:textColor,transition:'all 200ms ease-in-out'}}>About Me</H1>
            <RightDiv>
                    <RadarChart style={{color:textColor,transition:'all 200ms ease-in-out'}} color={textColor}/>  
                </RightDiv>
                <MainPDiv>
                {cards.map((card, i) => (
                <div className="column" key={i}>
                  <Card >
                    <div className="card-title" style={{color:textColor,transition:'all 200ms ease-in-out'}} key={i+1}>{card.title}</div>
                    <div className="card-body" style={{color:textColor,transition:'all 200ms ease-in-out'}} key={i+2}>{card.description}</div>
                  </Card>
                </div>
              ))}
                </MainPDiv>
        </BoxContainer>
    </div>
  
    )
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();
  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);
  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="AboutMeCard"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

const cards = [
  {
    title: 'Hi I am Matan 🙋🏻‍♂️',
    description:
      'Hi,my name is Matan and I am Full Stack engineer. I am  Here to make your dream come true! so challenge me! ,hit me with your best shot and toghether we will take your vision to the next level',
    image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
    imageRatio: 784 / 1016
  },
];