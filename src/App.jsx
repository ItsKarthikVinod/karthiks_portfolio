import React from "react";
import { Dock, Navbar, Welcome, Home } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {Terminal, Safari, Resume, Finder,Text,Image,Contact, Photos} from "#windows";
gsap.registerPlugin(Draggable);


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos/>
    </main>
  );
};

export default App;
