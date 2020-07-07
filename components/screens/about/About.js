import React from 'react';
import './styles.scss';


const Home = () => {
    return(
        <div className="page">
            <div className="screenContainer">
                <div className="centeredPaper">
                    <div className="pageContent about">
                            <h2 className="screenSectionHeader"><span>02.</span> About me</h2>
                            <p>I’m David, an UI / UX designer and front-end developer based in Brussels. I see myself as a hybrid when it comes to what I do. I’ve been doing both development and UI design for the last 5 years and I have love for both. I love the psychology behind UX, the creativity in UI, and the constant challenge of development.</p>
                            <p>My work is not my only passion, I also love sports, sun, surf, books and pretty much anything that makes me laugh!</p>
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