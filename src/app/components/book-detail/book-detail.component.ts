import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { Observable } from "rxjs";
import { Book } from "src/app/shared/book";
import { SetAuthorDetailAction } from "src/app/store/actions/author.actions";
import { Author } from "src/app/shared/author";
import { DeleteBookAction } from "src/app/store/actions/book.actions";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  bookDetail$: Observable<Book>;
  bookDetail: Book = null;
  authorDetail$: Observable<Author>;
  authorDetail: Author;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.bookDetail$ = this.store.select(
      (store: AppState) => store.books.detail
    );
    this.authorDetail$ = this.store.select(
      (store: AppState) => store.authors.detail
    );

    this.authorDetail$.subscribe(data => {
      this.authorDetail = data;
    });

    this.bookDetail$.subscribe(data => {
      this.bookDetail = data;
      if (this.bookDetail) {
        this.store.dispatch(
          new SetAuthorDetailAction(this.bookDetail.authorId)
        );
      }
    });
  }

  deleteBook() {
    this.store.dispatch(new DeleteBookAction(this.bookDetail.id));
  }
}
