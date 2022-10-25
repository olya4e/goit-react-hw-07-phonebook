import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from 'redux/operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    // addContact(state, action) {
    //   state.contacts.push({ id: nanoid(), ...action.payload });
    // },
    // deleteContact(state, action) {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    // Виконається в момент старту HTTP-запиту
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // Виконається якщо HTTP-запит завершився успішно
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts = action.payload;
    // },
    // Виконається якщо HTTP-запит завершився з помилкою
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };
export const contactsReduser = contactsSlice.reducer;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
