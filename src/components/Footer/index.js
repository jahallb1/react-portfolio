import React from 'react';


function FooterFun() {

    return(
        <footer>
            <a href="/">
                <img
                src={require('../../assets/logos/email.jpg')}
                alt="email"
                />
            </a>
            <a href="/">
                <img
                src={require('../../assets/logos/github.png')}
                alt="github"
                />
            </a>
            <a href="/">
                <img
                src={require('../../assets/logos/linkedin.png')}
                alt="linkedin"
                />
            </a>

        </footer>
    )
}

export default FooterFun;