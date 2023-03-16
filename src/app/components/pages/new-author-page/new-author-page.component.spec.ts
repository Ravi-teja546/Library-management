import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NewAuthorPageComponent } from "./new-author-page.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "../../../app.module";

describe("NewAuthorPageComponent", () => {
  let component: NewAuthorPageComponent;
  let fixture: ComponentFixture<NewAuthorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuthorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render author form", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector("[data-test-author-form-title]").textContent
    ).toContain("New Author");
  });
});
