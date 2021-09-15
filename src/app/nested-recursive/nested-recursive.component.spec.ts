import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRecursiveComponent } from './nested-recursive.component';

describe('NestedRecursiveComponent', () => {
  let component: NestedRecursiveComponent;
  let fixture: ComponentFixture<NestedRecursiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRecursiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRecursiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
