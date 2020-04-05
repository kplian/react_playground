import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from './../hooks/useMousePosition';

const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext);
    const position = useMousePosition();
    return (
      <div key={Math.floor(Math.random() * 10000000000)}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>{position.x}, {position.y}</p>
        <button onClick={() => dispatch({
            type: 'REMOVE_NOTE',
            title: note.title
          })}>remove</button>
      </div>
    );
  };

  export default Note;