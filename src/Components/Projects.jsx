import React,{useRef,useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from "styled-components";
import '../Designs/styles.scss';


const Container = styled.div `
  display:flex
  flex-direction:column;
  width: 99%;
  height: 10%;
  position: relative;
  text-align: center;
  color: white;
`;
function Projects(props) {
  return (
    <div className="main">
          <Container>
            <h1 style={{color:props.color,transition:'all 200ms ease-in-out'}}>Projects</h1>
          </Container>
          <Hero>
          <div className="container">
            <div className="row">
              {cards.map((card, i) => (
                <div className="column" key={i}>\
                  <Card>
                    <div className="card-title" key={i+1}>{card.title}</div>
                    <div className="card-body" key={i+2}>{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
    </div>
  );
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
      className="card"
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



function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} alt = ""/>
          </div>
        </div>
      </div>
    </div>
  );
}



const cards = [
  {
    title: 'Spotify Playlist Maker 🎵',
    description:
      'Create your favorite new palylist on Spotify using the Spotify Palylist Maker. With a smart Spotify API combining smooth code and design, you can create your own palylist on any device using my React App.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
    imageRatio: 784 / 1016
  },
  {
    title: 'Stock Chart 📈',
    description:
      'A smart system for tracking stocks around the world. Combined with smart design, proper logic and lots of computing on the UI, you got here a system that allows the user to connect to the console, filter, check and choose how and how he wants to track his stock.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
    imageRatio: 839 / 1133
  },
  {
    title: 'This Website 🖥️',
    description:
      "This site was built after intensive self learning using the latest technologies and lots of willpower. Combining with React, JS, HTML and CSS I created this site and its complexity on my own (Well i had some help from MR Google 😅) I Hope you liked it :)",
    image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
    imageRatio: 730 / 1030
  }
];

export default Projects;