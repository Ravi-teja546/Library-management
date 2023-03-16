import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";

import {
  LoadAuthorsAction,
  AuthorActionTypes,
  LoadAuthorsSuccessAction,
  LoadAuthorsFailureAction,
  AddAuthorAction,
  AddAuthorSuccessAction,
  AddAuthorFailureAction,
  DeleteAuthorAction,
  DeleteAuthorSuccessAction,
  DeleteAuthorFailureAction,
  SetAuthorDetailAction,
  SetAuthorDetailSuccessAction,
  SetAuthorDetailFailureAction
} from "../actions/author.actions";
import { of } from "rxjs";
import { AuthorsService } from "../../core/services/authors.service";

@Injectable()
export class AuthorEffects {
  @Effect() loadAuthors$ = this.actions$.pipe(
    ofType<LoadAuthorsAction>(AuthorActionTypes.LOAD_AUTHORS),
    mergeMap(() =>
      this.authorsService.getAuthors().pipe(
        map(data => {
          return new LoadAuthorsSuccessAction(data);
        }),
        catchError(error => of(new LoadAuthorsFailureAction(error)))
      )
    )
  );

  @Effect() addAuthor$ = this.actions$.pipe(
    ofType<AddAuthorAction>(AuthorActionTypes.ADD_AUTHOR),
    mergeMap(data =>
      this.authorsService.addAuthor(data.payload).pipe(
        map(() => new AddAuthorSuccessAction(data.payload)),
        catchError(error => of(new AddAuthorFailureAction(error)))
      )
    )
  );

  @Effect() deleteAuthor$ = this.actions$.pipe(
    ofType<DeleteAuthorAction>(AuthorActionTypes.DELETE_AUTHOR),
    mergeMap(data =>
      this.authorsService.deleteAuthor(data.payload).pipe(
        map(() => new DeleteAuthorSuccessAction(data.payload)),
        catchError(error => of(new DeleteAuthorFailureAction(error)))
      )
    )
  );

  @Effect() setAuthorDetail$ = this.actions$.pipe(
    ofType<SetAuthorDetailAction>(AuthorActionTypes.SET_AUTHOR_DETAIL),
    mergeMap(data =>
      this.authorsService.getAuthor(data.payload).pipe(
        map(response => new SetAuthorDetailSuccessAction(response)),
        catchError(error => of(new SetAuthorDetailFailureAction(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}
}
