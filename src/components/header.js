import { Link } from "gatsby";
import React, { useState } from "react";
import LogoNeu from '../images/Logo_neu.png';
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  

  return (
    <header className=" bg-gray-900">
    <div className="flex flex-row items-start justify-between max-w-8xl mx-auto md:">
      <Link to="/">
        <img className=" w-60 px-10 md:w-24 no-underline lg:w-40" 
           src={LogoNeu}
           alt="Logo Rettungsanker"/>
      </Link>

      <button
        className="mr-5 block px-2 py-2 text-white border border-white rounded md:hidden"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="w-8 h-18 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      
      <div className="hidden lg: w-4/12">
      </div>

      <nav
        className={`${
          isExpanded ? `block` : `hidden`
        } md:block md:items-center w-full md:w-auto`}
      >
        {[

         {
           route: `/`,
             title: `Home`,
          },
                 

            {
              route: `/geschichte`,
              title: `Geschichte`,
            },

            {
              route: `/team`,
              title: `Team`,
            },
            {
              route: `/drinks_snacks`,
              title: `Drinks & Snacks`,
            },

            {
              route: `/sportarena`,
              title: `Sportarena`,
            },

            {
              route: `/events`,
              title: `Events`,
            },


            {
              route: `/wohin`,
              title: `Wohin ?`,
            },
           
          ].map((link) => (
            <Link
              className="bg-gray-700 curser-auto block mt-2 h-auto font-serif text-4xl text-yellow-400 hover:bg-gray-900 hover:text-red-800 bg-gray-800 no-underline md:bg-gray-900 md:hover-bg.transparent md:text-yellow-400 md:hover:text-yellow-100 md:text-sxx md:mr-6 md:inline-block md:mt-0 md:ml-4 lg:text-2xl"
              key={link.title}trackin
              to={link.route}
            >
              {link.title}
            </Link>
       

          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;