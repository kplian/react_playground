import React, { useContext, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import NoteApp from './components/NoteApp';

const TestContext = React.createContext();

const testReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    
    case 'SET_TEXT':
      
      return { ...state, text: action.text}; 
    case 'SET_TEXT2':
      
        return { ...state, text2: action.text2}; 
    default:
      return state;
  }
};

const TestContainer = () => {
  //const { testData } = useContext(TestContext);
  console.log('rendercontainer');
  return (
    <div>
      <h1>
        prueba
      </h1>
      <input placeholder="container input"></input>
      <TestForm />
    </div>
  );

}

const TestForm = () => {
  console.log('render');
  const { testData, dispatch } = useContext(TestContext);  
  return(
    <div>
      <input placeholder="add text" value={testData.text} onChange={
        (e) => {
          dispatch({ type: 'SET_TEXT', text: e.target.value}); 
        }}>
      </input>
     
    </div>
  );
};

const TestApp = () => {
  const [testData, dispatch] = useReducer(testReducer, {text: '', title:''});
  console.log('renderApp');
  return (
    <TestContext.Provider value={{testData, dispatch}}>
      <TestContainer />
    </TestContext.Provider>);
};

ReactDOM.render(
  <TestApp />,
  document.getElementById('root')
);


/*ReactDOM.render(
  <NoteApp count={0}/>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
