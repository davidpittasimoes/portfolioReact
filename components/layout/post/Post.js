import React from 'react';
import Header from '../header/Header'
import './style.scss';
const Post = (props) => {
    return(
        <>
        <Header home/>
        <div>
            {props.children}
        </div>
        </>
    )
}

export default Post