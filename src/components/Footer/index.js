import React from 'react';
import Email from '../../assets/logos/email-updated.png'


function FooterFun() {

    return(
        <footer className="logos">
            <a href="joshua.allan.hall@gmail.com">
              <img src={Email} alt="icon of email" className="icon"/>
            </a>
            <a href="https://github.com/jahallb1">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/josh-hall-98bb5699/">
               Linkedin 
            </a>

        </footer>
    )
}

export default FooterFun;