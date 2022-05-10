import React, { useCallback, useRef } from "react";
import "./contact.scss";

export default function Contact({}) {

const request = useRef();

const send = useCallback((e) => {
        const x =  ( e.pageX * parseInt(9)) / 100;
        const y =(e.pageY * parseInt(9)) / 100;
        request.current.style.transform = `translate(${x}px,${y}px)`
}) 

  return (
    <div className="contactProject" onMouseMove={send} id='contact'> 
      <div className="contactProject__title">
        <span>let's</span>
        <span>talk</span>
        <span>about</span>
        <span>the</span>
        <span>project?</span>
      </div>

      <div className="contactProject__content">
          <div className="contactProject__content--help">
              <p>please contact me in any way you like</p>
          </div>
          <div className="contactProject__content--reseaux">
              <h3>social</h3>
              <div>
                  <p>Twitter</p>
                  <p>LinkedIn</p>
                  <p>Fiverr</p>
                  <p>instagram</p>
              </div>
          </div>
          <div className="contactProject__content--contact">
              <h3>contact</h3>
              <ol>
                  <li>ibrahimsyllac196@gmail.com</li>
                  <li>+225 0506430832</li>
                  <li><a href="https://wa.me/2250506430832" target='_blank'>whatsapp</a></li>
              </ol>
          </div>
         <div className="contactProject__content--send" ref={request}>
         <a href="mailto:ibrahimsyllac196@gmail.com">send a request</a>
         </div>
      </div>
    </div>
  );
}
