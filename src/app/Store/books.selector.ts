import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.state';

export const feature = createFeatureSelector('books');

export const books = createSelector(feature, (state: any) => {
        return Object.values(state.entities);
});