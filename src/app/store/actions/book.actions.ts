import { Action } from "@ngrx/store";
import { Book } from "../../shared/book";

export enum BookActionTypes {
  LOAD_BOOKS = "[BOOK] Load Books",
  LOAD_BOOKS_SUCCESS = "[BOOK] Load Books Success",
  LOAD_BOOKS_FAILURE = "[BOOK] Load Books Failure",
  ADD_BOOK = "[BOOK] Add Book",
  ADD_BOOK_SUCCESS = "[BOOK] Add Book Success",
  ADD_BOOK_FAILURE = "[BOOK] Add Book Failure",
  DELETE_BOOK = "[BOOK] Delete Book",
  DELETE_BOOK_SUCCESS = "[BOOK] Delete Book Success",
  DELETE_BOOK_FAILURE = "[BOOK] Delete Book Failure",
  SET_AUTHOR_BOOKS = "[BOOK] Set Author Books",
  SET_AUTHOR_BOOKS_SUCCESS = "[BOOK] Set Author Books Success",
  SET_AUTHOR_BOOKS_FAILURE = "[BOOK] Set Author Books Failure",
  DELETE_BOOKS_BY_AUTHOR = "[BOOK] Delete Book By Author",
  DELETE_BOOKS_BY_AUTHOR_SUCCESS = "[BOOK] Delete Book By Author Success",
  DELETE_BOOKS_BY_AUTHOR_FAILURE = "[BOOK] Delete Book By Author Failure",
  SET_BOOK_DETAIL = "[BOOK] Set Book Detail",
  SET_BOOK_DETAIL_SUCCESS = "[BOOK] Set Book Detail Success",
  SET_BOOK_DETAIL_FAILURE = "[BOOK] Set Book Detail Failure"
}

export class LoadBooksAction implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS;
}
export class LoadBooksSuccessAction implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS_SUCCESS;

  constructor(public payload: Array<Book>) {}
}
export class LoadBooksFailureAction implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS_FAILURE;

  constructor(public payload: Error) {}
}

export class AddBookAction implements Action {
  readonly type = BookActionTypes.ADD_BOOK;

  constructor(public payload: Book) {}
}
export class AddBookSuccessAction implements Action {
  readonly type = BookActionTypes.ADD_BOOK_SUCCESS;

  constructor(public payload: Book) {}
}
export class AddBookFailureAction implements Action {
  readonly type = BookActionTypes.ADD_BOOK_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteBookAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOK;

  constructor(public payload: number) {}
}

export class DeleteBookSuccessAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOK_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteBookFailureAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOK_FAILURE;

  constructor(public payload: Error) {}
}

export class SetAuthorBooksAction implements Action {
  readonly type = BookActionTypes.SET_AUTHOR_BOOKS;

  constructor(public payload: number) {}
}

export class SetAuthorBooksSuccessAction implements Action {
  readonly type = BookActionTypes.SET_AUTHOR_BOOKS_SUCCESS;

  constructor(public payload: Book[]) {}
}

export class SetAuthorBooksFailureAction implements Action {
  readonly type = BookActionTypes.SET_AUTHOR_BOOKS_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteBooksByAuthorAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOKS_BY_AUTHOR;

  constructor(public payload: number) {}
}

export class DeleteBooksByAuthorSuccessAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOKS_BY_AUTHOR_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteBooksByAuthorFailureAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOKS_BY_AUTHOR_FAILURE;

  constructor(public payload: Error) {}
}

export class SetBookDetailAction implements Action {
  readonly type = BookActionTypes.SET_BOOK_DETAIL;

  constructor(public payload: number) {}
}

export class SetBookDetailSuccessAction implements Action {
  readonly type = BookActionTypes.SET_BOOK_DETAIL_SUCCESS;

  constructor(public payload: Book) {}
}

export class SetBookDetailFailureAction implements Action {
  readonly type = BookActionTypes.SET_BOOK_DETAIL_FAILURE;

  constructor(public payload: Error) {}
}

export type BookAction =
  | AddBookAction
  | AddBookSuccessAction
  | AddBookFailureAction
  | DeleteBookAction
  | DeleteBookSuccessAction
  | DeleteBookFailureAction
  | LoadBooksAction
  | LoadBooksFailureAction
  | LoadBooksSuccessAction
  | SetAuthorBooksAction
  | SetAuthorBooksSuccessAction
  | SetAuthorBooksFailureAction
  | DeleteBooksByAuthorAction
  | DeleteBooksByAuthorSuccessAction
  | DeleteBooksByAuthorFailureAction
  | SetBookDetailAction
  | SetBookDetailSuccessAction
  | SetBookDetailFailureAction;
