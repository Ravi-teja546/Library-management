import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import {
  LoadBooksAction,
  LoadBooksSuccessAction,
  LoadBooksFailureAction,
  AddBookAction,
  AddBookSuccessAction,
  AddBookFailureAction,
  DeleteBookAction,
  DeleteBookSuccessAction,
  DeleteBookFailureAction,
  BookActionTypes,
  SetAuthorBooksAction,
  SetAuthorBooksSuccessAction,
  SetAuthorBooksFailureAction,
  DeleteBooksByAuthorAction,
  DeleteBooksByAuthorSuccessAction,
  DeleteBooksByAuthorFailureAction,
  SetBookDetailAction,
  SetBookDetailSuccessAction,
  SetBookDetailFailureAction
} from "../actions/book.actions";
import { of } from "rxjs";
import { BooksService } from "../../core/services/books.service";

@Injectable()
export class BookEffects {
  @Effect() loadAuthors$ = this.actions$.pipe(
    ofType<LoadBooksAction>(BookActionTypes.LOAD_BOOKS),
    mergeMap(() =>
      this.booksService.getBooks().pipe(
        map(data => {
          return new LoadBooksSuccessAction(data);
        }),
        catchError(error => of(new LoadBooksFailureAction(error)))
      )
    )
  );

  @Effect() addAuthor$ = this.actions$.pipe(
    ofType<AddBookAction>(BookActionTypes.ADD_BOOK),
    mergeMap(data =>
      this.booksService.addBook(data.payload).pipe(
        map(() => new AddBookSuccessAction(data.payload)),
        catchError(error => of(new AddBookFailureAction(error)))
      )
    )
  );

  @Effect() deleteAuthor$ = this.actions$.pipe(
    ofType<DeleteBookAction>(BookActionTypes.DELETE_BOOK),
    mergeMap(data =>
      this.booksService.deleteBook(data.payload).pipe(
        map(() => new DeleteBookSuccessAction(data.payload)),
        catchError(error => of(new DeleteBookFailureAction(error)))
      )
    )
  );

  @Effect() setAuthorBooks$ = this.actions$.pipe(
    ofType<SetAuthorBooksAction>(BookActionTypes.SET_AUTHOR_BOOKS),
    mergeMap(data =>
      this.booksService.getBooksByAuthorId(data.payload).pipe(
        map(response => new SetAuthorBooksSuccessAction(response)),
        catchError(error => of(new SetAuthorBooksFailureAction(error)))
      )
    )
  );

  @Effect() deleteAuthorBooks$ = this.actions$.pipe(
    ofType<DeleteBooksByAuthorAction>(BookActionTypes.DELETE_BOOKS_BY_AUTHOR),
    mergeMap(data =>
      this.booksService.deleteBookByAuthorId(data.payload).pipe(
        map(_ => new DeleteBooksByAuthorSuccessAction(data.payload)),
        catchError(error => of(new DeleteBooksByAuthorFailureAction(error)))
      )
    )
  );

  @Effect() setBookDetail$ = this.actions$.pipe(
    ofType<SetBookDetailAction>(BookActionTypes.SET_BOOK_DETAIL),
    mergeMap(data =>
      this.booksService.getBook(data.payload).pipe(
        map(response => new SetBookDetailSuccessAction(response)),
        catchError(error => of(new SetBookDetailFailureAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
