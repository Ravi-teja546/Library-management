import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy
} from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { CoreModule } from "./core/core.module";
import { LibraryInMemoryDbService } from "./db-services/library.db-service";
import { WelcomePageComponent } from "./components/pages/welcome-page/welcome-page.component";
import { AuthorsPageComponent } from "./components/pages/authors-page/authors-page.component";
import { BooksPageComponent } from "./components/pages/books-page/books-page.component";
import { AuthorListComponent } from "./components/author-list/author-list.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { AuthorDetailComponent } from "./components/author-detail/author-detail.component";
import { StoreModule } from "@ngrx/store";
import { AuthorReducer } from "../app/store/reducers/author.reducer";
import { BookReducer } from "../app/store/reducers/book.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthorEffects } from "../app/store/effects/author.effect";
import { BookEffects } from "../app/store/effects/book.effect";
import { AuthorFormComponent } from "./components/author-form/author-form.component";
import { NewAuthorPageComponent } from "./components/pages/new-author-page/new-author-page.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { NewBookPageComponent } from "./components/pages/new-book-page/new-book-page.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AuthorsPageComponent,
    BooksPageComponent,
    AuthorListComponent,
    BookListComponent,
    AuthorDetailComponent,
    AuthorFormComponent,
    NewAuthorPageComponent,
    BookDetailComponent,
    BookFormComponent,
    NewBookPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    routing,
    HttpClientInMemoryWebApiModule.forRoot(LibraryInMemoryDbService, {
      delay: 0
    }),
    StoreModule.forRoot({
      authors: AuthorReducer,
      books: BookReducer
    }),
    EffectsModule.forRoot([AuthorEffects, BookEffects])
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
