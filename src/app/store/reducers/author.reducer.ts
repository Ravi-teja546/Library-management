import { AuthorActionTypes, AuthorAction } from "../actions/author.actions";
import { Author } from "../../shared/author";

export interface AuthorsState {
  list: Author[];
  loading: boolean;
  error: Error;
  detail: Author;
}

const initialState: AuthorsState = {
  list: [],
  loading: false,
  error: undefined,
  detail: null
};

export function AuthorReducer(
  state: AuthorsState = initialState,
  action: AuthorAction
) {
  // console.log(action);
  switch (action.type) {
    case AuthorActionTypes.LOAD_AUTHORS:
      return {
        ...state,
        loading: true
      };
    case AuthorActionTypes.LOAD_AUTHORS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case AuthorActionTypes.LOAD_AUTHORS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case AuthorActionTypes.ADD_AUTHOR:
      return {
        ...state,
        loading: true
      };
    case AuthorActionTypes.ADD_AUTHOR_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case AuthorActionTypes.ADD_AUTHOR_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case AuthorActionTypes.DELETE_AUTHOR:
      return {
        ...state,
        loading: true
      };
    case AuthorActionTypes.DELETE_AUTHOR_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        detail: null,
        loading: false
      };
    case AuthorActionTypes.DELETE_AUTHOR_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case AuthorActionTypes.SET_AUTHOR_DETAIL:
      return {
        ...state,
        loading: true
      };
    case AuthorActionTypes.SET_AUTHOR_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        loading: false
      };

    case AuthorActionTypes.SET_AUTHOR_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
