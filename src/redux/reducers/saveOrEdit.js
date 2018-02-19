const noteStore = [];

export default (prevState = noteStore, action) => {
  switch (action.type) {
    case 'SAVE': {
      return [{
        title: action.payload.title,
        note: action.payload.note,
        id: action.payload.id,
      },
      ...prevState];
    }
    case 'EDIT': {
      const renenwedArr = [];
      for (let i = 0; i < prevState.length; i += 1) {
        if (prevState[i].id !== action.payload.currID) {
          renenwedArr.push(prevState[i]);
        }
      }
      return [{ title: action.payload.title, note: action.payload.note, id: action.payload.currID },
        ...renenwedArr];
    }
    default:
      return prevState;
  }
};
