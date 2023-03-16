import { Component, OnInit, ViewChild } from "@angular/core";
import { Book } from "src/app/shared/book";
import { AppState } from "../../store";
import { Store } from "@ngrx/store";
import {
  LoadBooksAction,
  SetBookDetailAction
} from "../../store/actions/book.actions";
import { Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  booksData: MatTableDataSource<Book>;
  selectedBookId: number = 0;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ["title"];

  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit() {
    this.books$ = this.store.select((store: AppState) => store.books.list);

    this.books$.subscribe(data => {
      this.booksData = new MatTableDataSource(data);
      this.booksData.sort = this.sort;
    });
    this.store.dispatch(new LoadBooksAction());
  }

  onFilterChange(value) {
    this.booksData.filter = value.trim().toLocaleLowerCase();
  }

  onBookSelected(id) {
    this.selectedBookId = id;
    this.store.dispatch(new SetBookDetailAction(id));
  }
  redirectNewBookPage() {
    this.router.navigate(["newbook"]);
  }
}
