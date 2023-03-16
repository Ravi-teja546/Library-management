import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthorsPageComponent } from "./authors-page.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "../../../app.module";

describe("AuthorsPageComponent", () => {
  let component: AuthorsPageComponent;
  let fixture: ComponentFixture<AuthorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render authors page title", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector("[data-test-authors-page-header]").textContent
    ).toContain("Author List");
  });
});
