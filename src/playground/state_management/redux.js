import React from 'react';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux';


const testReducer = (state = { text : 'valor inicial', title:'Este es mi titulo' }, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { text : action.text }
        default:
            return state
    }
    
};

let store = createStore(testReducer); //create context



const IntTestContainer = ({text}) => {
    console.log('render container');
    return (
        <div>
            <h1>{text}</h1>
            <TestForm />
        </div>
    )
}

const mapStateToProps2 = state => ({ text: state.text });
const TestContainer = connect(mapStateToProps2)(IntTestContainer);

const IntTestForm = ({text, dispatch}) => {    
    console.log('render form');
    return (
        <form>
            <input placeholder="ingrese texot" value={text} onChange={(e)=>{dispatch({type: 'SET_TEXT', text: e.target.value})} }></input>
        </form>
    )
}

const mapStateToProps = state => ({ text: state.text });
const TestForm = connect(mapStateToProps)(IntTestForm);

const TestApp = () => {    
    console.log('render app');
    return (     
        <Provider store={store}>  
            <TestContainer/>   
        </Provider>      
    );
};

export default TestApp;
