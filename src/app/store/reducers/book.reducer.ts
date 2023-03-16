import { BookActionTypes, BookAction } from "../actions/book.actions";
import { Book } from "../../shared/book";

export interface BooksState {
  list: Book[];
  loading: boolean;
  error: Error;
  authorBooks: Book[];
  detail: Book;
}

const initialState: BooksState = {
  list: [],
  loading: false,
  error: undefined,
  authorBooks: [],
  detail: null
};

export function BookReducer(
  state: BooksState = initialState,
  action: BookAction
) {
  switch (action.type) {
    case BookActionTypes.LOAD_BOOKS:
      return {
        ...state,
        loading: true
      };
    case BookActionTypes.LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case BookActionTypes.LOAD_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case BookActionTypes.ADD_BOOK:
      return {
        ...state,
        loading: true
      };
    case BookActionTypes.ADD_BOOK_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case BookActionTypes.ADD_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case BookActionTypes.DELETE_BOOK:
      return {
        ...state,
        loading: true
      };
    case BookActionTypes.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false,
        detail: null
      };
    case BookActionTypes.DELETE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case BookActionTypes.SET_AUTHOR_BOOKS:
      return {
        ...state,
        loading: true
      };
    case BookActionTypes.SET_AUTHOR_BOOKS_SUCCESS:
      return {
        ...state,
        authorBooks: action.payload,
        loading: false
      };
    case BookActionTypes.SET_AUTHOR_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case BookActionTypes.DELETE_BOOKS_BY_AUTHOR:
      return {
        ...state,
        loading: true
      };
    case BookActionTypes.DELETE_BOOKS_BY_AUTHOR_SUCCESS:
      return {
        ...state,
        authorBooks: null,
        list: [...state.list.filter(b => b.authorId !== action.payload)],
        detail: null,
        loading: false
      };
    case BookActionTypes.DELETE_BOOKS_BY_AUTHOR_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case BookActionTypes.SET_BOOK_DETAIL:
      return {
        ...state,
        loading: true
      };
    case BookActionTypes.SET_BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        loading: false
      };
    case BookActionTypes.SET_BOOK_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
