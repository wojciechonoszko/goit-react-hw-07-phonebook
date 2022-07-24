import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './actions';

export const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});