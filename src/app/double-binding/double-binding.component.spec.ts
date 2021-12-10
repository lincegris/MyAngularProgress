import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBindingComponent } from './double-binding.component';

describe('DoubleBindingComponent', () => {
  let component: DoubleBindingComponent;
  let fixture: ComponentFixture<DoubleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
