import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: uuid()
      }]
    case 'REMOVE_BOOK':
      return state.filter(book => (action.id !== book.id));
    default:
      return state;
    //throw new Error(`action.type '${action.type}' is undefined`);
  }
}