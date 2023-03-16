import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Author } from "src/app/shared/author";
import { Book } from "src/app/shared/book";
import { AppState } from "../../store";
import { DeleteAuthorAction } from "../../store/actions/author.actions";
import { DeleteBooksByAuthorAction } from "../../store/actions/book.actions";

@Component({
  selector: "app-author-detail",
  templateUrl: "./author-detail.component.html",
  styleUrls: ["./author-detail.component.css"]
})
export class AuthorDetailComponent implements OnInit {
  author$: Observable<Author> = null;
  authorBooks$: Observable<Book[]> = null;
  public authorDetails: Author = null;
  public authorBooks: MatTableDataSource<Book> = null;
  public displayedColumns: string[] = ["id", "title", "publisher", "year"];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.author$ = this.store.select((store: AppState) => store.authors.detail);
    this.authorBooks$ = this.store.select(
      (store: AppState) => store.books.authorBooks
    );
    this.author$.subscribe(data => {
      this.authorDetails = data;
    });
    this.authorBooks$.subscribe(data => {
      this.authorBooks = new MatTableDataSource(data);
    });
  }

  deleteAuthor() {
    this.store.dispatch(new DeleteBooksByAuthorAction(this.authorDetails.id));
    this.store.dispatch(new DeleteAuthorAction(this.authorDetails.id));
  }
}
