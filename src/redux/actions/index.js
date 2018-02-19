export const saveNoteType = 'SAVE';
export const editNoteType = 'EDIT';

export const saveNote = (id, title, note) => ({
  type: saveNoteType,
  payload: { id, title, note },
});

export const editNote = (currID, title, note) => ({
  type: editNoteType,
  payload: { currID, title, note },
});
