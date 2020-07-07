import React from 'react';
import './styles.scss';
import Grid from '@material-ui/core/Grid';
import {workItems} from '../../../utils/works';
import Link from 'next/link'



const Works = () => {
    return(
        <div className="screenContainer" id="work">
            <div className="centeredPaper">
                <div className="pageContent works">
                            <h2 className="screenSectionHeader"><span>01.</span> Works</h2>
                                <div className="worksContainer">
                                    {workItems.map((work) => (
                                                <div className={`box ${work.type}`} 
                                                        style={{
                                                            backgroundImage: `url(${work.bgImg})`, 
                                                            backgroundColor: work.bgColor, 
                                                            backgroundSize: '280px', 
                                                            backgroundPosition: '100% 40%', 
                                                            backgroundRepeat: 'no-repeat',
                                                        }}
                                                    >
                                                    <Link href="/projects/[id]" as={`/projects/${work.title}`}>
                                                        <a>
                                                        <div className="boxFooter">
                                                            <h3>{work.title}</h3>
                                                        </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                    ))}
                                </div>
                </div>
            </div>
        </div>
    )
}

export default Works;