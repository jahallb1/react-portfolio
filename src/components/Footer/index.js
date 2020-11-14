import React from 'react';
import Email from '../../assets/logos/email-updated.png';
import GitHub from '../../assets/logos/GitHub-Mark-120px-plus.png';
import Linkedin from '../../assets/logos/linkedin-new.png';


function FooterFun() {

    return(
        <footer className="logos">
            <a href="joshua.allan.hall@gmail.com">
              <img src={Email} alt="icon of email" className="icon"/>
              Email
            </a>
            <a href="https://github.com/jahallb1">
            <img src={GitHub} alt="icon of github" className="icon" />
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/josh-hall-98bb5699/">
            <img src={Linkedin} alt="icon of LinkedIn" className="icon" />
               Linkedin 
            </a>

        </footer>
    )
}

export default FooterFun;