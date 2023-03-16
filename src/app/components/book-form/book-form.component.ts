import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/shared/book";
import { AppState } from "src/app/store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Author } from "src/app/shared/author";
import { Router } from "@angular/router";
import { Validators, FormControl } from "@angular/forms";
import { LoadAuthorsAction } from "src/app/store/actions/author.actions";
import { AddBookAction } from "src/app/store/actions/book.actions";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"]
})
export class BookFormComponent implements OnInit {
  title: string = "";
  authorId: number = null;
  year: number = null;
  publisher: string = "";

  TitleControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(140)
  ]);
  PublishYearControl = new FormControl("", [
    Validators.required,
    Validators.min(0),
    Validators.max(2019)
  ]);

  PublisherControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(140)
  ]);

  AuthorControl = new FormControl("", [Validators.required]);

  authors$: Observable<Author[]>;
  authors: Author[];

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new LoadAuthorsAction());
    this.authors$ = this.store.select((state: AppState) => state.authors.list);

    this.authors$.subscribe(data => {
      this.authors = data;
    });
  }

  addBook() {
    this.store.dispatch(
      new AddBookAction({
        title: this.title,
        authorId: this.authorId,
        year: this.year,
        publisher: this.publisher
      })
    );

    this.router.navigate(["books"]);
  }

  returnToList() {
    this.router.navigate(["books"]);
  }

  getTitleErrorMessage() {
    return this.TitleControl.hasError("required") ||
      this.TitleControl.hasError("maxLength")
      ? "You must enter a Title with max 140 characters"
      : "";
  }

  getAuthorErrorMessage() {
    return this.AuthorControl.hasError("required")
      ? "You must choose Author"
      : "";
  }

  getPublishYearErrorMesage() {
    return this.PublishYearControl.hasError("required") ||
      this.PublishYearControl.hasError("min") ||
      this.PublishYearControl.hasError("max")
      ? "You must enter a Publish Year between 0-2019"
      : "";
  }

  getPublisherErrorMessage() {
    return this.PublisherControl.hasError("required") ||
      this.PublisherControl.hasError("maxLength")
      ? "You must enter a POblisher with max 140 characters"
      : "";
  }
}
