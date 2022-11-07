import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface Books{
    id: string | number,
    title: string,
    Description: string
}

export interface BooksState extends EntityState<Books>{

}

export const booksAdapter: EntityAdapter<Books> = createEntityAdapter<Books>();