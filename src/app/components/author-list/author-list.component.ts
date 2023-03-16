import { Component, OnInit, ViewChild } from "@angular/core";
import { Author } from "src/app/shared/author";
import { AppState } from "../../store";
import { Observable } from "rxjs";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {
  LoadAuthorsAction,
  SetAuthorDetailAction
} from "../../store/actions/author.actions";
import { SetAuthorBooksAction } from "../../store/actions/book.actions";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

@Component({
  selector: "app-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.css"]
})
export class AuthorListComponent implements OnInit {
  authorsData: MatTableDataSource<Author>;
  displayedColumns: string[] = ["name"];
  selectedAuthorId: number = 0;
  authors$: Observable<Array<Author>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.authors$ = this.store.select((store: AppState) => store.authors.list);
    this.loading$ = this.store.select(store => store.authors.loading);
    this.error$ = this.store.select(store => store.authors.error);
    this.store.dispatch(new LoadAuthorsAction());

    this.authors$.subscribe(data => {
      this.authorsData = new MatTableDataSource(data);
      this.authorsData.sort = this.sort;
    });
  }

  onAuthorSelected(id) {
    this.selectedAuthorId = id;
    this.store.dispatch(new SetAuthorDetailAction(id));
    this.store.dispatch(new SetAuthorBooksAction(id));
  }

  onFilterChange(value) {
    this.authorsData.filter = value.trim().toLocaleLowerCase();
  }
  redirectNewAuthorPage() {
    this.router.navigate(["/newauthor"]);
  }
}
