import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { SetBookDetailSuccessAction } from "src/app/store/actions/book.actions";

@Component({
  selector: "app-books-page",
  templateUrl: "./books-page.component.html",
  styleUrls: ["./books-page.component.css"]
})
export class BooksPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new SetBookDetailSuccessAction(null));
  }
}
