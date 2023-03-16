import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "../../../app.module";
import { WelcomePageComponent } from "./welcome-page.component";

describe("WelcomePageComponent", () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render welcome message", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector("[data-test-welcome-title]").textContent
    ).toContain("Welcome to our Library!");
  });

  it("should render navigate books button", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector("[data-test-welcome-books-button]").textContent
    ).toContain("Books");
  });
  it("should render navigate authors button", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector("[data-test-welcome-authors-button]").textContent
    ).toContain("Authors");
  });
});
