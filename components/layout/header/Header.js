import React from 'react';
import './styles.scss';
import Grid from '@material-ui/core/Grid';

const Header = (props) => {
    return(
        <div className="headerContainer">         
            <h1 className="logoTitle">David Pitta-Simões</h1>
            {props.home ? 
                <div className="navContainer">
                    <a href="/">
                        <span className="navItem">Home</span>
                    </a>
                    <span className="navItem btn secondary">Resume</span>
                </div>
                :  
                <a href="./DDC_CARLOS_DAVID_DE_PITTA_SIMÕES_BRILHA_NUNES_CARLOSNATAGAP2DOTPT.pdf" download className="navItem btn secondary">Resume</a>
            }
        </div>
     
    )
}

export default Header;