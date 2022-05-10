import React, { useCallback, useEffect, useRef } from "react";
import LoaderProject from "../LoaderProject/LoaderProject";
import video from "./img/header.mp4";
import home from "./img/home.jpg";
import home2 from "./img/home2.png";
import home3 from "./img/home3.png";
import mob from "./img/mob.png";
import mob2 from "./img/mob2.jpg";
import "./space.scss";

export default function Space({ onChangeVisibility }) {
  const container = useRef();

  useEffect(() => {
    const page = container.current.parentElement;
    page.scroll(0, 0);
  }, []);

  const out = useCallback(() => {
    container.current.parentElement.scrollTop = innerHeight;
    onChangeVisibility(null);
  }, []);

  const nextProject = useCallback(() => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("cursorAfter");
    onChangeVisibility(1);
  }, []);

  const cursorBig = useCallback((e) => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("cursorAfter");
  });

  const cursorReset = useCallback((e) => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("cursorAfter");
  });

  return (
    <div className="spaces" ref={container}>
      <Exit exits={out} />
      <LoaderProject />
      <div className="spaces__video">
        <div className="spaces__video--scroll">
          <p> {"> >"} </p>
          <p>scroll</p>
        </div>
        <div className="spaces__video--true">
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
      <div className="spaces__header">
        <div className="spaces__header--contentOne">
          <p>
            <b>front end</b>{" "}
            <i>
              <b>reactjs</b>.
            </i>
            Why reactjs because thanks to its component principle I modeled my
            code to my ideology, i.e. each display on the screen is independent
            of the code
          </p>
        </div>

        <div className="spaces__header--title">
          <span>my</span>
          <span>approach</span>
          <span>to this</span>
          <span>project</span>
        </div>
        <div className="spaces__header--contentTwo">
          <p>
            <b>style</b> I didn't use style component or material-ui it's weird
            I know I preferred to use{" "}
            <i>
              <b>sass</b>
            </i>{" "}
            and why because with my experience my sassDocs is very complete.
            Contact me for more details
          </p>
        </div>
      </div>
      <div className="spaces__imgHome">
        <img src={home} alt="the first website landing home" />
      </div>
      <div className="spaces__imgHome23">
        <div>
          <img src={home2} alt="the second website landing page" />
        </div>

        <div>
          <img src={home3} alt="the thrid website landing page" />
        </div>
      </div>
      <div className="spaces__imgMob">
        <div>
          {" "}
          <img src={mob} alt="the first mobile layout website" />{" "}
        </div>
        <div>
          {" "}
          <img src={mob2} alt="the seconde mobile layout website" />{" "}
        </div>
      </div>
      <div
        className="spaces__footer"
      >
        <div className="spaces__footer--content">
          <span>this</span>
          <span>SITE THE</span>
          <span>REDISIGN OF</span>
          <span>NASA</span>
        </div>
        <div className="spaces__footer--next" onClick={nextProject}  onMouseEnter={cursorBig}
        onMouseLeave={cursorReset}>
          <div>
            <h3>next project</h3>
            <h4>
              <a href="https://project2-ruby.vercel.app/" target="_blank">
                view the website
              </a>
            </h4>
            <h1>commerce</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const Exit = function ({ exits }) {
  return <button className="button-close" onClick={exits}></button>;
};
