import { createAction, props } from '@ngrx/store';
import { Books } from './books.state';

export const addOne = createAction("[Books] AddOne", props<{book: Books}>());
export const UpdateOne = createAction('[Books] UpdateOne', props<{id: number | string, book: Books}>());
export const deleteOne = createAction('[Book] DeleteOne', props<{id: number | string}>());