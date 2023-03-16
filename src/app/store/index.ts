import { AuthorsState } from "./reducers/author.reducer";
import { BooksState } from "./reducers/book.reducer";

export interface AppState {
  readonly authors: AuthorsState;
  readonly books: BooksState;
}
