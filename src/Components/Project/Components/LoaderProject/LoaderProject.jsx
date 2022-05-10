import React, { useRef, useEffect } from "react";
import "./loaderProject.scss";
import gsap from "gsap";


export default function LoaderCommerce({onChangeVisibility}) {
  const container = useRef();
  const element1 = useRef();
  const element2 = useRef();
  const element3 = useRef();

  const inverse = function(){
   
      gsap.to(element1.current, {
        duration: 1,
        height: () => innerHeight,
        ease: "bounce.out",
      });
  
      gsap.to(element2.current, {
        duration: 1,
        height: () => innerHeight,
        ease: "bounce.out",
      });
  
      gsap.to(element3.current, {
        duration: 1,
        height: () => innerHeight,
        ease: "bounce.out",
      });

      gsap.to(element1.current, {
        delay: 1,
        duration: 1,
        height: 0,
      });
  
      gsap.to(element2.current, {
        delay: 1.4,
        duration: 1,
        height: 0,
      });
  
      gsap.to(element3.current, {
        delay: 1.8,
        duration: 1,
        height: 0,
      });
  
      gsap.to(container.current, {
          delay:2.1,
          duration: 2,
          height: 0,
          ease: "expo.out"
        });
  }
  
  useEffect(() => {
      inverse();
  },[]);

  return (
    <div className="loaderCommerce" ref={container}>
      <div className="loaderCommerce1 element" ref={element1}></div>
      <div className="loaderCommerce2 element" ref={element2}></div>
      <div className="loaderCommerce3 element" ref={element3}></div>
    </div>
  );
}
