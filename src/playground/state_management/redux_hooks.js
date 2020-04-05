import React from 'react';
import { createStore } from 'redux'
import { Provider, useDispatch, useSelector } from 'react-redux';


const testReducer = (state = { text : 'valor inicial', title: 'este es el titulo' }, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text : action.text }
        default:
            return state
    }
    
};

let store = createStore(testReducer); //create context



const TestContainer = () => {
    console.log('render container');
    const title = useSelector(state => state.title);
    return (
        <div>
            <h1>{title}</h1>
            <TestForm />
        </div>
    )
}

const TestForm = () => {    
    const dispatch = useDispatch();
    const text = useSelector(state => state.text);
    
    console.log('render form');
    return (
        <form>
            <input placeholder="ingrese texot" value={text} onChange={(e)=>{dispatch({type: 'SET_TEXT', text: e.target.value})} }></input>
        </form>
    )
}

const TestApp = () => {    
    console.log('render app');
    return (     
        <Provider store={store}>  
            <TestContainer/>   
        </Provider>      
    );
};

export default TestApp;
