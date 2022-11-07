import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { books } from './Store/books.selector';
import * as fromSelect from './Store/books.selector';
import * as fromAction from './Store/books.actions';
import { Books } from './Store/books.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
     data: any;
     updateMode: boolean = false;
     toUpdate: any;
     toUpdateId: any;
     id: string = '';
     title: string = '';
     description: string = '';

     constructor(private store: Store){}
      ngOnInit(): void {
        this.store.select(fromSelect.books).subscribe((res: any) => {
             this.data = res;  
        })
      }

      onDelete(id: string){
        this.store.dispatch(fromAction.deleteOne({id: id}));
      }
      onUpdate(payload: any){
        this.updateMode = true;
        this.toUpdate = this.data.find((val: any) => {
          return val.id === payload.id;
        });
        this.toUpdateId = this.toUpdate.id;
      }
      ToUpdate(){
        const nwBook = { id: this.id, title: this.title, Description: this.description}
        this.store.dispatch(fromAction.UpdateOne({id: this.toUpdateId, book: nwBook}));
        this.updateMode=false;
        this.id = '';
        this.title = '';
        this.description = '';
      }
}
