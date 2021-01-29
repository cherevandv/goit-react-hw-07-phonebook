import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { actions, operations } from './';

const itemsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filter]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.addContactSuccess]: () => null,
  [actions.deleteContactError]: (_, { payload }) => payload,
  [actions.deleteContactSuccess]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.fetchContactsSuccess]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

//createAsyncThunk:

// const itemsReducer = createReducer([], {
//   [operations.fetchAllContacts.fulfilled]: (_, { payload }) => payload,
//   [operations.addContact.fulfilled]: (state, { payload }) => [
//     ...state,
//     payload,
//   ],
//   [operations.deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filterReducer = createReducer('', {
//   [actions.filter]: (_, { payload }) => payload,
// });

// const isLoadingReducer = createReducer(false, {
//   [operations.addContact.pending]: () => true,
//   [operations.addContact.fulfilled]: () => false,
//   [operations.addContact.rejected]: () => false,
//   [operations.deleteContact.pending]: () => true,
//   [operations.deleteContact.fulfilled]: () => false,
//   [operations.deleteContact.rejected]: () => false,
//   [operations.fetchAllContacts.pending]: () => true,
//   [operations.fetchAllContacts.fulfilled]: () => false,
//   [operations.fetchAllContacts.rejected]: () => false,
// });

// const errorReducer = createReducer(null, {
//   [operations.addContact.rejected]: (_, { payload }) => payload,
//   [operations.addContact.fulfilled]: () => null,
//   [operations.deleteContact.rejected]: (_, { payload }) => payload,
//   [operations.deleteContact.fulfilled]: () => null,
//   [operations.fetchAllContacts.rejected]: (_, { payload }) => payload,
//   [operations.fetchAllContacts.fulfilled]: () => null,
// });

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
//   isLoading: isLoadingReducer,
//   error: errorReducer,
// });
