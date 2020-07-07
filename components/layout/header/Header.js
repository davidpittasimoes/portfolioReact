import React from 'react';
import './styles.scss';
import Grid from '@material-ui/core/Grid';

const Header = (props) => {
    return(
        <div className="headerContainer">         
            <h1 className="logoTitle">David Pitta-Simões</h1>
            <a href="./DDC_CARLOS_DAVID_DE_PITTA_SIMÕES_BRILHA_NUNES_CARLOSNATAGAP2DOTPT.pdf" download className="navItem btn secondary">Resume</a>
        </div>
     
    )
}

export default Header;