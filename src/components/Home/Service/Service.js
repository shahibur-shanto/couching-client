import React from "react";
import { useHistory } from "react-router";
import {useSpring, animated} from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Service = ({ service }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
  let history = useHistory();
  const handleBooking = (title) => {
    history.push(`/booking/${title}`);
    // console.log(title);
  };
  return (
    
    <div className="col-md-3 services m-2">
    {/* <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    /> */}
        <animated.div className="service" onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
        <img className="service-img" src={`data:image/png;base64,${service.image.img}`} alt=""/>
          <h3>{service.title}</h3>
          <h4>${service.price}.00</h4>
          <p>{service.description}</p>
        </animated.div>
        <button className="btn btn-primary" onClick={() => handleBooking(service.title)}>Enroll Now</button>
      
    </div>
  );
};

export default Service;
