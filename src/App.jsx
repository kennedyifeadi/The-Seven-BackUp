import React from "react";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction";
import History from "./components/History";
import Statement from "./components/Statement";
import Programmes from "./components/Programmes";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
const App = () => {
  return (
    <div className=" bg-fixed bg-cover bg-center bg-no-repeat h-screen">
      <Nav />
      <Introduction />
      <History/>
      <Statement />
      <Programmes />
      <Courses />
      <Testimonials />
      <Blogs/>
      <Community />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
