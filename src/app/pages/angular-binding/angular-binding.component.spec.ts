import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBindingComponent } from './angular-binding.component';

describe('AngularBindingComponent', () => {
  let component: AngularBindingComponent;
  let fixture: ComponentFixture<AngularBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularBindingComponent],
    });
    fixture = TestBed.createComponent(AngularBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
