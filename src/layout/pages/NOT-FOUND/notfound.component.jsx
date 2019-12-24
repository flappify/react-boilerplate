import React from 'react';

import notfound from '../../../assets/404.jpg';

import './notfound.styles.css';

const NotFound =()=>{
    return(
        <div className="notfound">
            <div className="top">
                <img src={notfound} alt="page-error"/>
            </div>
            <div className="bottom">
                <h1>Page Not found</h1>
            </div>
        </div>
    )
}
export default NotFound;