import React from 'react';
import TreePage from './lib/TreePage';

const config = {
    at1: 'fdafd',
    at2: 'fdafsda'
};

const Organigrama = () => { 
    return(
        <div>
            <TreePage config={config} ></TreePage>
        </div>
    ); 
};

export default Organigrama;