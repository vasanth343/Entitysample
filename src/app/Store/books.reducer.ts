import { createReducer, on } from '@ngrx/store';
import * as actions from './books.actions';
import { Books, booksAdapter, BooksState } from './books.state';


const initialState: BooksState = {
    ids: ['1', '2', '3'],
    entities: {
        '1': {id: '1', title: 'First Book', Description: 'Description about first book'},
        '2': {id: '2', title: 'Second Book', Description: 'Description about Second Book'},
        '3': {id: '3', title: 'Third Book', Description: 'Description about Third book'}
    }
}

export const reducers = createReducer(initialState, 
    on(actions.addOne, (state, {book}) => {
       return  booksAdapter.addOne(book, state);
    }),
    on(actions.deleteOne, (state, {id}) => {
        return booksAdapter.removeOne(+id, state);
    }),
    on(actions.UpdateOne, (state, {id, book}) =>{
        return booksAdapter.updateOne({id: +id, changes: book}, state);
    })
    );


