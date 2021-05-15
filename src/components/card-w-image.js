import React from 'react';
import MickImage from '../images/portrait-mick1.png';
const CardImage = () => {
    return (
        <div>
            <div className="p-1 bg-gray-900">
  <h3 className="text-orange-400 font-bold mb-"></h3>
  <div className="bg-gray-900 rounded-4lx shadow-2xl flex flex-row gap-y-20 md:flex">
    <img
     src={MickImage} 
     alt="Portrait Mick" 
     className="w-36 h-36  md:w-52 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div className="">
      <p className="mx-2 .leading-none text-yellow-800 text-xs text-justify px-1 sx:text-sm" >Ausgebaut im Stile eines Schiffrumpfes ist der Rettungsanker-Freiburg - im Zentrum der Altstadt Freiburgs - eine super Location um vom Alltag etwas Abstand zu gewinnen und einfach nette Meschen kennen zu lernen. Wir sind stolz auf unser internationales Publikum. Ideal für private oder geschäftliche Events - sprechen Sie uns an oder kontaktieren Sie uns per mail. Wir freuen uns Sie begrüssen zu dürfen. Mick und das Team des Rettungsankers   !
      </p>
    </div>

  </div>

</div>


        </div>
    )
}

export default CardImage;
