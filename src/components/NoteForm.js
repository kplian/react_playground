import React, { useContext, useState } from 'react';
import NotesContext from '../context/notes-context';
const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { dispatch } = useContext(NotesContext);
    const addNote = (e) => {
        e.preventDefault();     
        dispatch({
          type: 'ADD_NOTE',
          note: {
            title,
            body
          }
        });    
        setTitle('');
        setBody('');      
      };
    return(
        <form onSubmit={addNote}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <button>Add note</button>
        </form>
    );
}
export default NoteForm;
    