import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "../../../app.module";
import { NewBookPageComponent } from "./new-book-page.component";

describe("NewBookPageComponent", () => {
  let component: NewBookPageComponent;
  let fixture: ComponentFixture<NewBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render author form", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector("[data-test-book-form-title]").textContent
    ).toContain("New Book");
  });
});
