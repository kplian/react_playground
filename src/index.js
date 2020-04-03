import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
/*You only need to create a TestApp component in playgrounfd folder and import here*/
import TestApp from './playground/state_management/redux_hooks';


ReactDOM.render(
    <TestApp />,
    document.getElementById('root')
);