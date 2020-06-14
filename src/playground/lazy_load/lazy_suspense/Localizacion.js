import React, { Suspense, lazy } from 'react';

const config = {
    at1: 'fdafd',
    at2: 'fdafsda'
};
const MapPage = lazy(() => import('./lib/MapPage'));
const moment = lazy(() => import('moment'));
const Localizacion = () => { 
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <MapPage config={config} ></MapPage>
        </Suspense>
    ); 
};

export default Localizacion;