import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import {
  SetAuthorDetailAction,
  SetAuthorDetailSuccessAction
} from "src/app/store/actions/author.actions";

@Component({
  selector: "app-authors-page",
  templateUrl: "./authors-page.component.html",
  styleUrls: ["./authors-page.component.css"]
})
export class AuthorsPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new SetAuthorDetailSuccessAction(null));
  }
}
