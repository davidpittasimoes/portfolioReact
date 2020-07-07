import React from 'react';
import './styles.scss';


const Home = () => {
    return(
        <div className="page">
            <div className="screenContainer">
                <div className="centeredPaper">
                    <div className="pageContent about">
                            <h2 className="screenSectionHeader"><span>02.</span> About me</h2>
                            <p>I’m David, an UI / UX designer and Front-end developer based in Brussels. I’m kinda hybrid when it comes to what I do. I’ve been doing both development and UI design for the last 5 years and I a have love for both. So if you are wondering which one I prefer or I can do bets... I would both, for different reasons in diferent times and envoirnments.</p>
                    </div>
                    <div className="floatingItemContainer">
                            <figure>
                                <img src="../me.jpg"/>
                            </figure>
                            <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;