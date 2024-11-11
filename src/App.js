import React from "react";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header.js";
import Popup from "./components/Popup.js"
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
      header_content = "Oliver's Favorite Sports Teams"
      />
      <main className="flex-grow p-4 max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <section className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Favorite Teams</h2>
              {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
          ))}
          </section>
        <div className="flex flex-col md:flex-row gap-8">
          <section className="md:w-3/4">
            <h2 className="text-2xl font-semibold mb-4 text-center">Images</h2>
              <Carousel items={carouselData} />
          </section>
        </div>
        </div>
      </main>
      <Popup 
      popup_text = "Thanks for checking out my website!"/>
      <Footer
      content = "Oliver Noel"
      />
    </div>
  );
}

export default App;

const accordionData = [
  {
    title: "Indiana Pacers",
    content:
      "The Indiana Pacers are an American professional basketball team based in Indianapolis. The Pacers compete in the National Basketball Association (NBA) as a member of the Central Division of the Eastern Conference."
  },

  {
    title: "Indianapolis Colts",
    content:
      "The Indianapolis Colts are a professional American football team based in Indianapolis. The Colts compete in the National Football League (NFL) as a member of the American Football Conference (AFC) South division. Since the 2008 season, the Colts have played their games in Lucas Oil Stadium.",
  },
  {
    title: "Indy Eleven",
    content: "Indy Eleven is an American professional soccer team based in Indianapolis, Indiana. Founded in 2013, the team made its debut in the North American Soccer League (NASL) in 2014, before moving to the United Soccer League (USL) in 2018.",
  },
];

const carouselData = [
  {
    image: "./images/indianapacers.jpg",
    title: "Indiana Pacers"
  },
  {
    image: "./images/indianapoliscolts.jpg",
    title: "Indianapolis Colts"
  },
  {
    image: "./images/indyeleven.jpg",
    title: "Indy Eleven"
  },
];