import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LogoAlt from "../images/logo_alt.jpg";
import HeroAImage from "../images/Hero100.png";
import PalomaImage from "../images/Albers.png";
import HeroBImage from "../images/Hero.png";
import BrushImage from "../images/brush.png";
//import HansAlbersImage from "../images/Hans-Albers.png";
import Card from '../components/card-w-image';
import Modal from '../components/modal';
//import {BallonsAstraImage} from "../images/astraballons.png";
//import Tippy from '@tippyjs/react';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="w-screen h-full mx-auto">
      <img
          alt="Schild Rettungsanker"
          className=" w-20  object-fill mx-auto sm:hidden "
          src={LogoAlt}
        />
        <img
          alt="Bar Impressionen"
          className=" w-screen object-fill objekt-top  mx-auto lg:hidden "
          src={HeroAImage}
        />

<img
          alt="Bar Impressionen"
          className=" hidden sx:w-screen sx:h-full sx:object-fill sx:mx-auto  "
          src={HeroBImage}
        />

        

      

    <div className="mt-15 w-screen bg gray-red-900 flex flex-col items-center lg:flex lg:flex-row lg:-mt-10 lg:w-screen lg:justify-between ">

      
      <div className="mt-12 bg-gray-900 lg:w-3/12 relative ">
      <img
          alt="Brush"
          className=" w-72 object-fill objekt-top  mx-auto "
          src={BrushImage}
        />


            <p className="text-yellow-100  text-4xl text-center font-serif font-bold uppercase absolute top-0">Dein Treffpunkt <br/> in Freiburg! </p>
      </div>

      <div className="mt-6 bg-gray-900 lg:w-3/12 "> 
              <Modal />          
      </div>

      <div className="mt-5 mr-11  bg-gray-900 border-2 rounded .shadow-2xl lg:w">
              <Card/>
            </div>
      </div>

    </section>
    
    <section className=" w-12/12 h-3/6">
      <div>
      <h1 className="text-6xl font-serif text-yellow-400">Die Kiezkneipe</h1>
        <img
              alt="Paloma"
              className=" w-84 object-fill objekt-top  mx-auto "
              src={PalomaImage}
            />
        
        </div>
      



    </section>

    </Layout>
  );
}

export default IndexPage;
