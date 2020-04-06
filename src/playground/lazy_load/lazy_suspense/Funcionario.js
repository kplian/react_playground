import React from 'react';
import TablePage from './lib/TablePage';

const config = {
    at1: 'fdafd',
    at2: 'fdafsda'
};

const Funcionario = () => { 
    return(
        <div>
            <TablePage config={config} ></TablePage>
        </div>
    ); 
};

export default Funcionario;