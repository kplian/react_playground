import React, { useEffect, useReducer } from 'react';
import notesReducer from './../reducers/notes';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotesContext from './../context/notes-context';
const NoteApp = () => {    
    const [notes, dispatch] = useReducer(notesReducer, []);
    

    useEffect(() => {      
      const notes = JSON.parse(localStorage.getItem('notes'));
      if (notes) {
        dispatch({ type: 'POPULATE_NOTES', notes});           
      }
         
    },[]);

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));      
    },[notes]);    
    
    return(
      <NotesContext.Provider value={{notes, dispatch}}>
        <h1>Notes</h1>
        <NoteList />
        <p>Add note</p>
        <NoteForm/>
        
      </NotesContext.Provider>
    );
}

export default NoteApp;