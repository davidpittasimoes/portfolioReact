import React from 'react';
import './styles.scss';
import { Link, animateScroll as scroll } from "react-scroll";



const Home = (props) => {
    return(
        <div className="screenContainer">
            <div className="centeredPaper">
                <div className="pageContent home">
                            <h3>Hey there, my name is</h3>
                            <h2>David Pitta-Simões.</h2>
                            <h2 className="secondaryHeader">I create cool stuff for the web.</h2>
                            <p>I am a UI / UX designer and full-stack developer (yes, ones that do both exist) from Portugal based in Brussels, Belgium. </p>
                            <div className="ctaContainer">
                                <Link to="work"  smooth={true} offset={-70} duration= {500}>
                                    <span className="btn primary">Check out my work</span>
                                </Link>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Home;