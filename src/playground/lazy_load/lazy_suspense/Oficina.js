import React, { Suspense, lazy } from 'react';

const config = {
    at1: 'fdafd',
    at2: 'fdafsda'
};
const TablePage = lazy(() => import('./lib/TablePage'));
const Oficina = () => { 
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <TablePage config={config} ></TablePage>
        </Suspense>
    ); 
};

export default Oficina;