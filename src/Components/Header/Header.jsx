import React from "react";
import "./Header.scss";
import './Components/Loader/Loader';
import Loader from "./Components/Loader/Loader";
import Sidebar from './Components/Sidebar/Sidebar';
import ParallaxEffect from './Components/ParallaxEffect/ParallaxEffect.jsx';
import Reseau from "./Components/Reseau/Reseau";
import Content from './Components/Content/Content'
import websiteContent from '../../assets/js/websiteContent'

export default function Header() {
 
const navTitle = websiteContent().header.navTitle;
const title = websiteContent().header.title;
  return (
    <header className="header" data-scroll-section>
      <Loader/>
     <Sidebar title={title} navTitle={navTitle} />
     <Content/>
    </header>
  );
}
