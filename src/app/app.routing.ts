import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksPageComponent } from "./components/pages/books-page/books-page.component";
import { AuthorsPageComponent } from "./components/pages/authors-page/authors-page.component";
import { NewAuthorPageComponent } from "./components/pages/new-author-page/new-author-page.component";
import { WelcomePageComponent } from "./components/pages/welcome-page/welcome-page.component";
import { NewBookPageComponent } from "./components/pages/new-book-page/new-book-page.component";
export const routes: Routes = [
  { path: "books", component: BooksPageComponent },
  { path: "authors", component: AuthorsPageComponent },
  { path: "", component: WelcomePageComponent },
  { path: "newauthor", component: NewAuthorPageComponent },
  { path: "newbook", component: NewBookPageComponent }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true
});
