import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatressComponent } from './matress.component';

describe('MatressComponent', () => {
  let component: MatressComponent;
  let fixture: ComponentFixture<MatressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
