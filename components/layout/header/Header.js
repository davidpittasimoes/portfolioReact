import React from 'react';
import './styles.scss';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'; 

const Header = (props) => {
    return(
        <div className="headerContainer">         
            <Link href="/"><a><h1 className="logoTitle">David Pitta-Simões</h1></a></Link>
            <a href="./DDC_CARLOS_DAVID_DE_PITTA_SIMÕES_BRILHA_NUNES_CARLOSNATAGAP2DOTPT.pdf" download className="navItem btn secondary">Resume</a>
        </div>
     
    )
}

export default Header;