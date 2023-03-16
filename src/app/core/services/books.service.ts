import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "../../shared/book";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

/**
 * CANDIDATE: ADD NEW METHODS IF NEEDED
 */

@Injectable()
export class BooksService {
  readonly books = "books";

  constructor(private httpClient: HttpClient) {}

  getBooks() {
    return this.httpClient.get<Book[]>(`app/${this.books}`);
  }

  getBooksByAuthorId(authorId: number): Observable<Book[]> {
    const authorBooksObservable = new Observable<Book[]>(observer => {
      let books: Book[] = [];
      this.getBooks().subscribe(data => {
        books = data.filter(book => book.authorId === authorId);
        observer.next(books);
        observer.complete();
      });
    });
    return authorBooksObservable;
  }

  deleteBookByAuthorId(authorId: number): Observable<void> {
    const DeletedAuthorBooksObservable = new Observable<void>(observer => {
      this.getBooksByAuthorId(authorId).subscribe(async data => {
        for (const book of data) {
          await this.deleteBook(book.id);
        }
        observer.next();
        observer.complete();
      });
    });
    return DeletedAuthorBooksObservable;
  }

  getBook(id: number) {
    return this.httpClient.get<Book>(`app/${this.books}/${id}`);
  }

  deleteBook(id: number) {
    return this.httpClient.delete<Book>(`app/${this.books}/${id}`);
  }

  addBook(book: Book) {
    return this.httpClient.post<Book>(`app/${this.books}`, book, httpOptions);
  }

  updateBook(book: Book) {
    return this.httpClient.put<Book>(`app/${this.books}`, book, httpOptions);
  }
}
