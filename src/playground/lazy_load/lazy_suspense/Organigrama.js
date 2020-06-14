import React, { Suspense, lazy } from 'react';

const config = {
    at1: 'fdafd',
    at2: 'fdafsda'
};
const TreePage = lazy(() => import('./lib/TreePage'));
const Organigrama = () => { 
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <TreePage config={config} ></TreePage>
        </Suspense>
    ); 
};

export default Organigrama;