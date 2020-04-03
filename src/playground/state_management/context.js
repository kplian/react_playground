import React, { useContext, useReducer } from 'react';

const TestContext = new React.createContext();

const testReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { text : action.text }
        default:
            return state
    }
    
};

const TestContainer = () => {
    console.log('render container');
    return (
        <div>
            <h1>Titulo</h1>
            <TestForm />
        </div>
    )
}

const TestForm = () => {
    console.log('render form');
    const {testData:data, dispatch} = useContext(TestContext);
    return (
        <form>
            <input placeholder="ingrese texot" value={data.text} onChange={(e)=>{dispatch({type: 'SET_TEXT', text: e.target.value})} }></input>
        </form>
    )
}

const TestApp = () => {
    console.log('render app');
    const [testData, dispatch] = useReducer(testReducer, { text: 'valor inicial'});
    return(
        <TestContext.Provider value={{ testData, dispatch }}>
            <TestContainer/>
        </TestContext.Provider>
    );
};

export default TestApp;
