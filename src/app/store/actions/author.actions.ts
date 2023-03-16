import { Action } from "@ngrx/store";
import { Author } from "../../shared/author";

export enum AuthorActionTypes {
  LOAD_AUTHORS = "[AUTHOR] Load Authors",
  LOAD_AUTHORS_SUCCESS = "[AUTHOR] Load Authors Success",
  LOAD_AUTHORS_FAILURE = "[AUTHOR] Load Authors Failure",
  ADD_AUTHOR = "[AUTHOR] Add Author",
  ADD_AUTHOR_SUCCESS = "[AUTHOR] Add Author Success",
  ADD_AUTHOR_FAILURE = "[AUTHOR] Add Author Failure",
  DELETE_AUTHOR = "[AUTHOR] Delete Author",
  DELETE_AUTHOR_SUCCESS = "[AUTHOR] Delete Author Success",
  DELETE_AUTHOR_FAILURE = "[AUTHOR] Delete Author Failure",
  SET_AUTHOR_DETAIL = "[AUTHOR] Set Author Detail",
  SET_AUTHOR_DETAIL_SUCCESS = "[AUTHOR] Set Author Detail Success",
  SET_AUTHOR_DETAIL_FAILURE = "[AUTHOR] Set Author Detail Failure"
}

export class LoadAuthorsAction implements Action {
  readonly type = AuthorActionTypes.LOAD_AUTHORS;
}
export class LoadAuthorsSuccessAction implements Action {
  readonly type = AuthorActionTypes.LOAD_AUTHORS_SUCCESS;

  constructor(public payload: Array<Author>) {}
}
export class LoadAuthorsFailureAction implements Action {
  readonly type = AuthorActionTypes.LOAD_AUTHORS_FAILURE;

  constructor(public payload: Error) {}
}

export class AddAuthorAction implements Action {
  readonly type = AuthorActionTypes.ADD_AUTHOR;

  constructor(public payload: Author) {}
}
export class AddAuthorSuccessAction implements Action {
  readonly type = AuthorActionTypes.ADD_AUTHOR_SUCCESS;

  constructor(public payload: Author) {}
}
export class AddAuthorFailureAction implements Action {
  readonly type = AuthorActionTypes.ADD_AUTHOR_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteAuthorAction implements Action {
  readonly type = AuthorActionTypes.DELETE_AUTHOR;

  constructor(public payload: number) {}
}

export class DeleteAuthorSuccessAction implements Action {
  readonly type = AuthorActionTypes.DELETE_AUTHOR_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteAuthorFailureAction implements Action {
  readonly type = AuthorActionTypes.DELETE_AUTHOR_FAILURE;

  constructor(public payload: Error) {}
}

export class SetAuthorDetailAction implements Action {
  readonly type = AuthorActionTypes.SET_AUTHOR_DETAIL;

  constructor(public payload: number) {}
}

export class SetAuthorDetailSuccessAction implements Action {
  readonly type = AuthorActionTypes.SET_AUTHOR_DETAIL_SUCCESS;

  constructor(public payload: Author) {}
}

export class SetAuthorDetailFailureAction implements Action {
  readonly type = AuthorActionTypes.SET_AUTHOR_DETAIL_FAILURE;

  constructor(public payload: Error) {}
}

export type AuthorAction =
  | AddAuthorAction
  | AddAuthorSuccessAction
  | AddAuthorFailureAction
  | DeleteAuthorAction
  | DeleteAuthorSuccessAction
  | DeleteAuthorFailureAction
  | LoadAuthorsAction
  | LoadAuthorsFailureAction
  | LoadAuthorsSuccessAction
  | SetAuthorDetailAction
  | SetAuthorDetailSuccessAction
  | SetAuthorDetailFailureAction;
