import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedlistComponent } from './nestedlist.component';

describe('NestedlistComponent', () => {
  let component: NestedlistComponent;
  let fixture: ComponentFixture<NestedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
