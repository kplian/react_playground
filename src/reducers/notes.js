const notesReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_NOTES':
        return action.notes
      case 'ADD_NOTE':
        return [...state, action.note]
      case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title);
      default:
        return state
    }
  };

  export default notesReducer;