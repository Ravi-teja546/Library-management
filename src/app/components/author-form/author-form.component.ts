import { Component, OnInit } from "@angular/core";
import { Author } from "src/app/shared/author";
import { AppState } from "../../store";
import { Observable } from "rxjs";
import { AddAuthorAction } from "../../store/actions/author.actions";
import { Store } from "@ngrx/store";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-author-form",
  templateUrl: "./author-form.component.html",
  styleUrls: ["./author-form.component.css"]
})
export class AuthorFormComponent implements OnInit {
  authorName: string = "";
  yearOfBirth: number = null;
  BirthYearControl = new FormControl("", [
    Validators.required,
    Validators.min(0),
    Validators.max(2010)
  ]);
  AuthorNameControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(140)
  ]);

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {}

  addAuthor() {
    this.store.dispatch(
      new AddAuthorAction({
        name: this.authorName,
        yearOfBirth: this.yearOfBirth
      })
    );
    this.router.navigate(["authors"]);
  }

  returnToList() {
    this.router.navigate(["authors"]);
  }

  getAuthorNameErrorMessage() {
    return this.AuthorNameControl.hasError("required") ||
      this.AuthorNameControl.hasError("maxLength")
      ? "You must enter a Author Name"
      : "";
  }
  getYearofBirthErrorMessage() {
    return this.AuthorNameControl.hasError("required") ||
      this.AuthorNameControl.hasError("min") ||
      this.AuthorNameControl.hasError("max")
      ? "You must enter a Birth Year between 0-2010"
      : "";
  }
}
