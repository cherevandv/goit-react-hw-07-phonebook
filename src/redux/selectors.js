import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getVisiblesContacts = createSelector(
  [getItems, getFilter],
  (allContacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  },
);

export const getLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
