import React from 'react';
import ReactDOM from 'react-dom';
/*You only need to create a TestApp component in playgrounfd folder and import here*/
import TestApp from './playground/lazy_load/lazy_suspense';


ReactDOM.render(
    <TestApp />,
    document.getElementById('root')
);