import React from 'react';
import MapPage from './lib/MapPage';

const config = {
    at1: 'fdafd',
    at2: 'fdafsda'
};

const Localizacion = () => { 
    return(
        <div>
            <MapPage config={config} ></MapPage>
        </div>
    ); 
};

export default Localizacion;