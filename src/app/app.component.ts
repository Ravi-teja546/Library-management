import { Component, OnInit } from "@angular/core";
import { AppState } from "./store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent implements OnInit {
  authorError$: Observable<Error>;
  bookError$: Observable<Error>;

  authorLoading$: Observable<boolean>;
  bookLoading$: Observable<boolean>;

  error: Error = null;
  isLoading: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.authorError$ = this.store.select(
      (state: AppState) => state.authors.error
    );
    this.bookError$ = this.store.select((state: AppState) => state.books.error);
    this.authorLoading$ = this.store.select(
      (state: AppState) => state.authors.loading
    );
    this.bookLoading$ = this.store.select(
      (state: AppState) => state.books.loading
    );

    const errorHandler = (errorData: Error) => {
      this.error = errorData;
      console.log(this.error);
    };
    const loadingHandler = (loadingData: boolean) =>
      (this.isLoading = loadingData);

    this.authorError$.subscribe(errorHandler);
    this.bookError$.subscribe(errorHandler);

    this.authorLoading$.subscribe(loadingHandler);
    this.bookLoading$.subscribe(loadingHandler);
  }
}
