import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedsingleComponent } from './nestedsingle.component';

describe('NestedsingleComponent', () => {
  let component: NestedsingleComponent;
  let fixture: ComponentFixture<NestedsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
