import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BooksPageComponent } from "./books-page.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "../../../app.module";

describe("BooksPageComponent", () => {
  let component: BooksPageComponent;
  let fixture: ComponentFixture<BooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render books page title", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector("[data-test-books-page-header]").textContent
    ).toContain("Book List");
  });
});
