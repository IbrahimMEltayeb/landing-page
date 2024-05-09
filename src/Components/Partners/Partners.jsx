import React from 'react'
import './Partners.css'
import biscoMisrLogo from './logos/Bisco_Misr.png';
import juhaynaLogo from './logos/juhayna.png';
import coronaLogo from './logos/corona.png';
import spiroLogo from './logos/spiro.jpg';
import sutraLogo from './logos/sutra.jpg';
import elanoLogo from './logos/elano.jpg';
import egyptFoodsLogo from './logos/egypt-foods.jpg';
import domtyLogo from './logos/domty.jpg';

function Partners() {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={biscoMisrLogo} width="100px" height="200px" alt="Bisco Misr" />
        <img src={juhaynaLogo} alt="Juhayna" />
        <img src={coronaLogo} width="100px" height="100px" alt="Corona" />
        <img src={spiroLogo} width="100px" height="150px" alt="Spiro" />
        <img src={sutraLogo} width="100px" height="150px" alt="Sutra" />
        <img src={elanoLogo} width="100px" height="150px" alt="Elano" />
        <img src={egyptFoodsLogo} width="100px" height="150px" alt="Egypt Foods" />
        <img src={domtyLogo} width="100px" height="150px" alt="Domty" />
      </div>

      <div className="logos-slide">
        <img src={biscoMisrLogo} width="100px" height="200px" alt="Bisco Misr" />
        <img src={juhaynaLogo} alt="Juhayna" />
        <img src={coronaLogo} width="100px" height="100px" alt="Corona" />
        <img src={spiroLogo} width="100px" height="150px" alt="Spiro" />
        <img src={sutraLogo} width="100px" height="150px" alt="Sutra" />
        <img src={elanoLogo} width="100px" height="150px" alt="Elano" />
        <img src={egyptFoodsLogo} width="100px" height="150px" alt="Egypt Foods" />
        <img src={domtyLogo} width="100px" height="150px" alt="Domty" />
      </div>
    </div>
  )
}

export default Partners;