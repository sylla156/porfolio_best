import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Sidebar.scss";

export default function Sidebar({ title, navTitle }) {
  let [nameClassChoose, handleChangeNameClassChoose] = useState(false);
  const [btn, onChangeBtn] = useState(undefined);
  function onHanbleNavbar() {
    handleChangeNameClassChoose(!nameClassChoose);
  }

  return (
    <>
      <NavBtn
        onHanbleNavbar={onHanbleNavbar}
        title={title}
        nameClassChoose={nameClassChoose}
        onChangeBtn={onChangeBtn}
      />
      <NavBar nameClassChoose={nameClassChoose} navTitle={navTitle} btn={btn} />
    </>
  );
}

function NavBtn({ title, onHanbleNavbar, nameClassChoose, onChangeBtn }) {
  const btn = useRef();

  useEffect(() => {
    onChangeBtn(btn);
  });
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">{title}</h1>
      <div
        className={`sidebar__btn ${
          nameClassChoose ? "btn__enable" : "btn__disable"
        }`}
        onClick={onHanbleNavbar}
        ref={btn}
      >
        <p className="sidebar__btn--element1"></p>
        <p className="sidebar__btn--element2"></p>
        <p className="sidebar__btn--element3"></p>
      </div>
    </div>
  );
}

function NavBar({ nameClassChoose, navTitle, btn }) {
  let nameClass = nameClassChoose ? "nav__enable" : "nav__disable";
  const move = useCallback((e) => {
    const value = e.target.innerText.toLowerCase();
    btn.current.click();
  });

  return (
    <div className={nameClass}>
      <div className="nav">
        <p onMouseMove={MouseEffect} onClick={move}>
          <a href="#about"> {navTitle[0]}</a>
        </p>
        <p onMouseMove={MouseEffect} onClick={move}>
          <a href="#project"> {navTitle[1]}</a>
        </p>
        <p onMouseMove={MouseEffect} onClick={move}>
          <a href="#contact"> {navTitle[2]}</a>
        </p>
        <p onMouseMove={MouseEffect} onClick={move}>
          <a href="#skills"> {navTitle[3]}</a>
        </p>
      </div>
      <div className="navImg"></div>
    </div>
  );
}

function MouseEffect(event) {
  const mouse = {
    x: 0,
    y: 0,
  };
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  const img = document.querySelector(".navImg");

  img.style.transform = `translate(${mouse.x - img.offsetWidth / 2}px, ${
    mouse.y - img.offsetHeight / 2
  }px)`;

  switch (event.target.innerText) {
    case "ABOUT":
      img.classList.add("about");
      img.classList.remove("works", "contact", "skills");
      break;

    case "PROJECT":
      img.classList.add("works");
      img.classList.remove("about", "contact", "skills");

      break;

    case "CONTACT":
      img.classList.add("contact");
      img.classList.remove("works", "about","skills");
      break;

      case "SKILLS":
      img.classList.add("skills");
      img.classList.remove("works", "about",'contact');
      break;

    default:
      img.classList.remove("works", "about", "contact","skills");
      break;
  }

}
