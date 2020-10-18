import React from 'react';
import Spinner from './assets/loader.gif';


function Loader() {
    return (
       
        <section className="loader-section bg-black">
        <div className="text-center  spinner">
        <img src={Spinner} className="img-fluid" alt="loading"/>
        </div>
        </section>
        
    )
}

export default Loader;
