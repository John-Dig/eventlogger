import React from "react";
import photo from '../img/photo.jpg';

function Header(){
  return (
    <React.Fragment>
      <h1>Sasquatch Sightings</h1>
      <p>Log your sasquatch sightings!</p>
      <img src={photo} alt='bigfoot and ronald' />

      
    </React.Fragment>
  )
}

export default Header;